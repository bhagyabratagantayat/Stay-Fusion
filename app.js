if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);


// const ejs = require("ejs");
// const port = 3000;
// const bodyParser = require("body-parser");

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/stayfusion";

connectToDatabase()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


async function connectToDatabase() {
  await mongoose.connect(dbUrl);
}

// async function connectToDatabase() {
//   try {
//     await mongoose.connect(MONGIODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// connectToDatabase();

// app.use(bodyParser.json());
// app.use(express.static("public"));
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/listings");
});

// app.get("/listings", async (req, res) => {
//     let sampleListings = new Listing({
//         title: "Cozy Apartment in Downtown",
//         description: "A beautiful and cozy apartment located in the heart of the city.",
//         price: 120,
//         location: "Downtown",
//         images: ["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
//         country: "USA"
//     });

//     await sampleListings.save();
//     console.log("Sample listing saved to database.");
//     res.send("Sample listing created and saved to database.");

// });

// Index route with Search, Filter & Pagination
app.get("/listings", async (req, res) => {
  let { q, type, status, page = 1 } = req.query;
  const limit = 9; // Listings per page
  const skip = (page - 1) * limit;

  let query = {};
  if (q) {
    query.$or = [
      { title: { $regex: q, $options: "i" } },
      { location: { $regex: q, $options: "i" } }
    ];
  }
  if (type) query.propertyType = type;
  if (status) query.status = status;

  const allListings = await Listing.find(query).skip(skip).limit(limit);
  const totalListings = await Listing.countDocuments(query);
  const totalPages = Math.ceil(totalListings / limit);

  res.render("listings/index.ejs", {
    allListings,
    currentPage: parseInt(page),
    totalPages,
    searchQuery: q || "",
    activeType: type || "",
    activeStatus: status || ""
  });
});

// New listing page
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});

// Show individual listing details
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// Create route
app.post("/listings", async (req, res) => {
  const listingData = req.body.listing;

  // Handle multi-image input if provided as a comma-separated string
  if (typeof listingData.images === 'string') {
    listingData.images = listingData.images.split(",").map(img => img.trim()).filter(img => img !== "");
  }

  const newListing = new Listing(listingData);
  await newListing.save();
  res.redirect(`/listings/${newListing._id}`);
});

// Edit route
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

// Update route
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listingData = req.body.listing;

  if (typeof listingData.images === 'string') {
    listingData.images = listingData.images.split(",").map(img => img.trim()).filter(img => img !== "");
  }

  const updatedListing = await Listing.findByIdAndUpdate(id, listingData, { new: true });
  res.redirect(`/listings/${updatedListing._id}`);
});


//delete route
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

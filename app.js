const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);


// const ejs = require("ejs");
// const port = 3000;
// const bodyParser = require("body-parser");

const MONGIODB_URI = "mongodb://127.0.0.1:27017/stayfusion";

connectToDatabase()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


  async function connectToDatabase() {
    await mongoose.connect(MONGIODB_URI);
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
  // res.render('index', { //title: 'Home Page' });
  res.send("Welcome to the Home Page");
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

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {allListings });
});


//new listing
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});



//show individual listing details
//show route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
   const listing = await Listing.findById(id);
   res.render("listings/show.ejs", { listing });

});


//create route
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect(`/listings/${newListing._id}`);
});


//edit route
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//update route
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
  res.redirect(`/listings/${updatedListing._id}`);
});


//delete route
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});  


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

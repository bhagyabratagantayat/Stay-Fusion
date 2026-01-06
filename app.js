const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const port = 3000;

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

app.get("/listings", async (req, res) => {
    let sampleListings = new Listing({
        title: "Cozy Apartment in Downtown",
        description: "A beautiful and cozy apartment located in the heart of the city.",
        price: 120,
        location: "Downtown",
        images: ["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        country: "USA"
    });

    await sampleListings.save();
    console.log("Sample listing saved to database.");
    res.send("Sample listing created and saved to database.");

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

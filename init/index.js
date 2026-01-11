const mongoose = require("mongoose");
const database = require("./data.js"); // your sampleListings file
const Listing = require("../models/listing.js");

const MONGODB_URI = "mongodb://127.0.0.1:27017/stayfusion";

async function connectToDatabase() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(database.data);
  console.log("Database initialized with sample data.");
};

connectToDatabase()
  .then(initDB)
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

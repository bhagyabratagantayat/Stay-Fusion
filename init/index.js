require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const database = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/stayfusion";

async function connectToDatabase() {
  await mongoose.connect(dbUrl);
  console.log("Connected to MongoDB");
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Map old data structure to new schema
  const newData = database.data.map((obj) => ({
    ...obj,
    images: [obj.image.url], // Map image object url to images array
    propertyType: "House",
    status: "Available",
    bedrooms: Math.floor(Math.random() * 5) + 1,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    amenities: ["Wifi", "AC", "Kitchen"]
  }));

  await Listing.insertMany(newData);
  console.log("Database initialized with sample data.");
};

connectToDatabase()
  .then(initDB)
  .then(() => mongoose.connection.close())
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

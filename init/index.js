const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { data: sampleListings } = require("./data");

async function initDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB Connected");

    // Delete old data (optional)
    await Listing.deleteMany({});
    console.log("🗑 Old data deleted");

    // Map data to match schema (convert image object to images array)
    const formattedListings = sampleListings.map((obj) => ({
      ...obj,
      images: [obj.image.url],
      propertyType: "House",
      status: "Available",
      bedrooms: Math.floor(Math.random() * 5) + 1,
      bathrooms: Math.floor(Math.random() * 3) + 1,
      amenities: ["Wifi", "AC", "Kitchen"]
    }));

    // Insert sample data
    await Listing.insertMany(formattedListings);
    console.log("🚀 Sample data inserted");

    mongoose.connection.close();
  } catch (err) {
    console.log("❌ Error:", err);
  }
}

initDB();

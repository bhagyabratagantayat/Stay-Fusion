require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { data: sampleListings } = require("./init/data");

async function initDB() {
    try {
        if (!process.env.MONGO_URI) {
            console.error("❌ Error: MONGO_URI is not defined in .env");
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ DB Connected");

        // Delete old data
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
        console.error("❌ Error:", err);
        process.exit(1);
    }
}

initDB();

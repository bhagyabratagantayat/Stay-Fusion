const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
    images: {
        type: [String],
        default: ["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1174&auto=format&fit=crop"]
    },
    propertyType: {
        type: String,
        enum: ["House", "Apartment", "Villa", "Cabin", "Castle", "Other"],
        default: "House"
    },
    status: {
        type: String,
        enum: ["Available", "Sold", "Rented"],
        default: "Available"
    },
    bedrooms: { type: Number, default: 0 },
    bathrooms: { type: Number, default: 0 },
    amenities: {
        type: [String],
        default: []
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
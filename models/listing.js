const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },

    images: {
        type: [String],
        set: (v) =>
        v.length === 0
            ? ["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1174&auto=format&fit=crop"]
            : v,
        default: ["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1174&auto=format&fit=crop"]
    },

    country: { type: String, required: true },
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
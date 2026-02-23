const sampleListings = [
  {
    title: "Cliffside Ocean Retreat",
    description:
      "Wake up to dramatic ocean views from this stunning cliffside retreat. Perfect for sunsets and quiet mornings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Big Sur",
    country: "United States",
  },
  {
    title: "Traditional Ryokan Stay",
    description:
      "Experience authentic Japanese hospitality in this peaceful ryokan featuring tatami rooms and garden views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Countryside Farmhouse Escape",
    description:
      "Relax in the rolling countryside in this renovated farmhouse surrounded by open fields and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Provence",
    country: "France",
  },
  {
    title: "Glass Cabin in the Woods",
    description:
      "Reconnect with nature in this modern glass cabin offering forest views and complete privacy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Vancouver Island",
    country: "Canada",
  },
  {
    title: "Coastal Breeze Villa",
    description:
      "A serene coastal villa with open terraces, ocean breeze, and calming sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Goa",
    country: "India",
  },
  {
    title: "Mountain Stone Lodge",
    description:
      "A rustic stone lodge tucked in the mountains, perfect for trekking and quiet nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Manali",
    country: "India",
  },
  {
    title: "Minimalist City Apartment",
    description:
      "A clean and modern apartment located in the heart of the city with easy metro access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Hidden Jungle Cottage",
    description:
      "A secluded jungle cottage surrounded by wildlife, greenery, and complete tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Thekkady",
    country: "India",
  },
  {
    title: "Canal-Side Boutique Stay",
    description:
      "Charming boutique accommodation beside historic canals with local cafés nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Luxury Desert Camp",
    description:
      "Premium desert camp offering luxury tents, cultural shows, and stargazing nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Nordic Wooden Cabin",
    description:
      "A cozy Nordic-style cabin surrounded by pine trees and snowy landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Oslo",
    country: "Norway",
  },
  {
    title: "Heritage Haveli Stay",
    description:
      "Experience royal living in this restored heritage haveli with traditional décor.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Clifftop Sunset Cabin",
    description:
      "A wooden cabin perched on cliffs offering dramatic views of the sea at sunset.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Urban Business Suite",
    description:
      "Modern business suite ideal for professionals, close to offices and transit.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Backwater Houseboat",
    description:
      "Traditional houseboat experience with calm waters, local food, and nature views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Snow Valley Retreat",
    description:
      "A warm retreat surrounded by snow-covered valleys and scenic trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Eco Bamboo Homestay",
    description:
      "Eco-conscious bamboo homestay designed for sustainable and peaceful living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Hampi",
    country: "India",
  },
  {
    title: "Luxury Marina Apartment",
    description:
      "High-end apartment overlooking a yacht marina with premium amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Monaco",
    country: "Monaco",
  },
  {
    title: "Quiet Countryside Barn",
    description:
      "Converted countryside barn offering open fields, fresh air, and peaceful living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Yorkshire",
    country: "United Kingdom",
  },
  {
    title: "Riverfront Modern Loft",
    description:
      "Stylish loft apartment with river views and vibrant nightlife nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Budapest",
    country: "Hungary",
  },
  {
    title: "Tea Estate Bungalow",
    description:
      "Colonial-era bungalow located within lush tea gardens and misty hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Island Sunset Cottage",
    description:
      "Cozy island cottage offering uninterrupted sunset views and calm beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Langkawi",
    country: "Malaysia",
  },
  {
    title: "Historic Old Town Apartment",
    description:
      "Stay in a historic old-town apartment close to landmarks and cultural spots.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1750,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Luxury Lake View Villa",
    description:
      "Elegant villa overlooking a peaceful lake with private deck and premium interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Mediterranean Seaview Apartment",
    description:
      "Bright and airy apartment overlooking the Mediterranean Sea, steps away from local cafes and beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Nice",
    country: "France",
  },
  {
    title: "Desert Dome Stay",
    description:
      "Sleep under the stars in this unique desert dome offering unforgettable night skies and silence.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Wadi Rum",
    country: "Jordan",
  },
  {
    title: "Nordic Lakeside Lodge",
    description:
      "A cozy wooden lodge beside a frozen lake, ideal for northern lights viewing and winter adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Colonial Home with Courtyard",
    description:
      "Stay in a beautifully preserved colonial home featuring a tranquil inner courtyard and local charm.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Antigua",
    country: "Guatemala",
  },
  {
    title: "Overwater Lagoon Bungalow",
    description:
      "Step directly into turquoise waters from this private overwater bungalow with panoramic lagoon views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Urban Studio with Skyline View",
    description:
      "Compact and modern studio apartment offering stunning skyline views and easy access to city life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Hilltop Sunrise Villa",
    description:
      "Enjoy breathtaking sunrise views from this peaceful hilltop villa surrounded by lush greenery and calm air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Snowy Alpine Chalet",
    description:
      "A warm wooden chalet nestled in snowy mountains, perfect for winter sports and cozy evenings by the fire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Seaside Stone Cottage",
    description:
      "Charming stone cottage overlooking the sea, offering peaceful nights and refreshing coastal breezes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1450,
    location: "Algarve",
    country: "Portugal",
  },
  {
    title: "Modern Desert Villa",
    description:
      "A stylish desert villa with minimal design, private patio, and stunning golden landscape views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Palm Springs",
    country: "United States",
  },
  {
    title: "Riverside Bamboo Retreat",
    description:
      "Stay close to nature in this eco-friendly bamboo retreat located beside a tranquil river.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Pai",
    country: "Thailand",
  },
  {
    title: "Luxury City Penthouse",
    description:
      "High-rise penthouse offering panoramic city views, modern interiors, and premium comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Forest Canopy Treehouse",
    description:
      "Sleep among the treetops in this unique treehouse surrounded by dense forest and birdsong.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Monteverde",
    country: "Costa Rica",
  },
  {
    title: "Historic Riverside Manor",
    description:
      "An elegant historic manor by the river, blending classic architecture with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1950,
    location: "Oxford",
    country: "United Kingdom",
  },
  {
    title: "Island Coral Beach Hut",
    description:
      "Simple yet beautiful beach hut with crystal-clear waters just steps from your door.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
    },
    price: 1250,
    location: "El Nido",
    country: "Philippines",
  },
  {
    title: "Lakeside Wooden Cabin",
    description:
      "Peaceful wooden cabin by a calm lake, ideal for kayaking, fishing, and quiet reflection.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
    },
    price: 1150,
    location: "Queenstown",
    country: "New Zealand",
  },
];

module.exports = { data: sampleListings };

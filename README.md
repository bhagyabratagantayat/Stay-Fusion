# Stay Fusion – Airbnb Clone

Stay Fusion is a full-stack web application inspired by Airbnb. It allows users to browse diverse property listings, view detailed information, and manage listings through a full CRUD (Create, Read, Update, Delete) interface.

## 🚀 Features

- **Responsive Listing Gallery**: View property listings in a beautiful, responsive card-based layout.
- **Detailed Property Views**: Click on any listing to see more details, including location, price, and description.
- **Full CRUD Functionality**:
  - Add new property listings via a dedicated form.
  - Edit existing listing details to keep information up-to-date.
  - Delete listings that are no longer available.
- **Responsive Design**: Optimized for all screen sizes using Bootstrap and custom CSS.
- **Database Integration**: Powered by MongoDB for robust data storage.

## 🛠️ Tech Stack

- **Frontend**: EJS (Embedded JavaScript), Bootstrap, Vanilla CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Middleware**: Method-Override (for PUT/DELETE requests)
- **Templating**: ejs-mate for layouts and partials

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhagyabratagantayat/Stay-Fusion.git
   cd Stay-Fusion
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Database Seeding (Optional)**:
   If you want to populate the database with sample data:
   ```bash
   node init/index.js
   ```

4. **Run the application**:
   ```bash
   node app.js
   ```

5. **Access the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

- `app.js`: Entry point of the application.
- `models/`: Mongoose schemas for data structure.
- `views/`: EJS templates for rendering pages.
- `public/`: Static files (CSS, images, JS).
- `init/`: Seed scripts and raw data for database initialization.

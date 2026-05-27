# Bookshop

A modern book management app with a React + Redux front-end and an Express + MongoDB API back-end. This repository includes a full-stack bookstore application designed for browsing, filtering, adding, updating, and deleting books.

## 🚀 Live Demo

**Bookshop client:** https://book-shop-client-rho.vercel.app/

**Bookshop backend API:** https://bookshop-mu-woad.vercel.app/

> The live deployments give you fast access to the client UI and the hosted API.

## ✨ Project Overview

Bookshop is a responsive web application that allows users to manage a catalog of books. It uses React for the user interface, Redux for state management, and Node/Express with MongoDB for the back-end API.

The repository is organized into two main folders:

- `client/` — React front-end application
- `server/` — Express back-end API with MongoDB persistence

## 🔧 Key Features

- Browse a list of books with title, author, price, rating, and thumbnail
- Filter books by featured status and rating
- Add new books through a client form
- Edit existing book details
- Delete books from the catalog
- RESTful API endpoints for full CRUD support
- MongoDB database support with seed data for easy setup

## 🧱 Tech Stack

- Front-end: React, Redux, Redux Thunk
- Back-end: Express, Node.js
- Database: MongoDB, Mongoose
- API: RESTful routes under `/api/books`
- Deployment: Vercel compatible server export and CRA front-end build

## 📁 Repository Structure

```
client/
  package.json
  src/
    components/
      Book.js
      BookContainer.js
      Filter.js
      Form.js
      FormContainer.js
      Input.js
      MainContent.js
      Navbar.js
      Star.js
    redux/
      book/
      filter/
      rootReducer.js
      store.js
server/
  index.js
  models/Book.js
  routes/books.js
  seed.js
```

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd bookshop
```

### 2. Install dependencies

Install client dependencies:

```bash
cd client
npm install
```

Install server dependencies:

```bash
cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside `server/` with the MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

### 4. Seed the database (optional)

Run the seed script to populate the database with sample books:

```bash
npm run seed
```

### 5. Start the server

From the `server/` folder:

```bash
npm run dev
```

The API will be available at `http://localhost:8000` in development mode.

### 6. Start the client

From the `client/` folder:

```bash
npm start
```

The React app will open at `http://localhost:3000`.

## 🧪 Available Scripts

### Client

- `npm start` — Start the React development server
- `npm run build` — Build the front-end for production
- `npm test` — Run front-end tests

### Server

- `npm start` — Start the server normally
- `npm run dev` — Start the server with `nodemon` for automatic restarts
- `npm run seed` — Seed MongoDB with sample book data

## 🧩 API Endpoints

The server exposes the following endpoints:

- `GET /api/books` — List all books
- `GET /api/books/:id` — Get a single book by ID
- `POST /api/books` — Create a new book
- `PUT /api/books/:id` — Update a book by ID
- `DELETE /api/books/:id` — Delete a book by ID

## 📌 Notes

- The API supports optional query filters on `GET /api/books` using `featured` and `rating`.
- Example query: `/api/books?featured=true&rating=5`

## 💡 Deployment

- Front-end can be deployed as a static Create React App build.
- Back-end is exportable for Vercel and can also run on any Node-compatible host.

## 🤝 Contributions

Feel free to open issues or submit pull requests to improve Bookshop. Contributions are welcome for UI enhancements, API features, validation, authentication, and deployment automation.

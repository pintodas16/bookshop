require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book');

const books = [
  {
    name: "Slow Horses (Deluxe Edition)",
    author: "Mick Herron",
    thumbnail: "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
    price: 14,
    rating: 3,
    featured: false
  },
  {
    name: "The Last Thing He Told Me: A Novel",
    author: "Laura Dave",
    thumbnail: "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
    price: 13.99,
    rating: 4,
    featured: false
  },
  {
    name: "Learn js",
    author: "LWS",
    thumbnail: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    price: 233,
    rating: 2,
    featured: true
  },
  {
    name: "Learn Redux",
    author: "LWS",
    thumbnail: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    price: 1999,
    rating: 5,
    featured: true
  },
  {
    name: "pinto",
    author: "pinto das",
    thumbnail: "https://images.unsplash.com/photo-1672343527405-0d6bd084988c?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    price: 334,
    rating: 1,
    featured: false
  },
  {
    name: "new React way",
    author: "pinto",
    thumbnail: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    price: 1234,
    rating: 5,
    featured: false
  },
  {
    name: "hello world",
    author: "hello",
    thumbnail: "ehl",
    price: 23,
    rating: 4,
    featured: false
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Book.deleteMany({});
    console.log('Cleared existing books');

    await Book.insertMany(books);
    console.log(`✅ Seeded ${books.length} books successfully`);
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
  } finally {
    process.exit();
  }
}

seed();
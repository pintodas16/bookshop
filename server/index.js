
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/books');

const app = express();






app.use(cors({
  origin: '*',  // or your frontend URL e.g. 'http://localhost:3000'
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the Bookshop API');
});

// Routes
app.use('/api/books', bookRoutes);

// Connect to MongoDB then start server


  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    // Only listen on a port in development
    if (process.env.NODE_ENV !== 'production') {
      app.listen(process.env.PORT || 8000, () =>
        console.log(`Server running on http://localhost:${process.env.PORT || 8000}`)
      );
    }
  })
  .catch(err => console.error(err));

// Export for Vercel
module.exports = app;
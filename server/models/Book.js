const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  author:    { type: String, required: true },
  thumbnail: { type: String },
  price:     { type: Number, required: true },
  rating:    { type: Number, min: 1, max: 5 },
  featured:  { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
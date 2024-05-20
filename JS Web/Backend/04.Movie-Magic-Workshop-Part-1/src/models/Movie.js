const mongoose = require("mongoose");

// Create the schema for the Movie object
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  director: String,
  year: Number,
  rating: String,
  description: String,
  imageUrl: String,
  cast: [{
    type: mongoose.Types.ObjectId,
    ref: 'Cast',
  }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

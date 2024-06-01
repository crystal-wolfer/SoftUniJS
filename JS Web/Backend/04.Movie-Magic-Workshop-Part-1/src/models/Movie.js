const mongoose = require("mongoose");

// Create the schema for the Movie object
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  director: String,
  year: Number,
  rating: String,
  stars: String,
  description: String,
  imageUrl: String,
  cast: [{
    type: mongoose.Types.ObjectId,
    ref: 'Cast',
  }],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

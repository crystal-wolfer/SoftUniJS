const mongoose = require("mongoose");

// Create the schema for the Movie object
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
  },

  genre: {
    type: String,
    required: [true, "Genre is required!"],
  },

  director: {
    type: String,
    required: [true, "Director is required!"],
  },

  year: {
    type: Number,
    required: [true, "Year is required!"],
  },

  rating: {
    type: String,
    required: [true, "Rating is required!"],
  },

  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required!"],
  },
  
  cast: [{
    type: mongoose.Types.ObjectId,
    ref: 'Cast',
  }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

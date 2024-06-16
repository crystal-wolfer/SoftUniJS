const mongoose = require("mongoose");

// Create the schema for the Book object
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: [2, "Title must be at least 2 characters!"],
  },
  author: {
    type: String,
    required: [true, "Author is required!"],
    minLength: [5, "Author must be at least 3 characters!"],
  },
  imageUrl: {
    type: String,
    match: [/^https?:\/\/.*/, "Please enter a valid URL!"],
    required: [true, "Image URL is required!"],
  },
  review: {
    type: String,
    required: [true, "Review is required!"],
    minLength: [10, "Review must be at least 10 characters!"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required!"],
    minLength: [3, "Genre must be at least 3 characters!"],
  },
  stars: {
    type: Number,
    required: [true, "Stars is required!"],
    min: [1, "Stars must be at least 1!"],
    max: [5, "Stars must be less than 5!"],
  },
  wishingList: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

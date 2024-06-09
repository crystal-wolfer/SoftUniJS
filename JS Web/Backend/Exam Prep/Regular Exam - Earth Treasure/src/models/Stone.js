const mongoose = require("mongoose");

// Create the schema for the Stone object
const stoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: [2, "Name must be at least 2 characters!"],
  },
  category: {
    type: String,
    required: [true, "Category is required!"],
    minLength: [3, "Category must be at least 3 characters!"],
  },
  color: {
    type: String,
    required: [true, "Color is required!"],
    minLength: [2, "Color must be at least 3 characters!"],
  },
  imageUrl: {
    type: String,
    match: [/^https?:\/\/.*/, "Please enter a valid URL!"],
    required: [true, "Image URL is required!"],
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
    minLength: [5, "Location must be at least 5 characters!"],
    maxLength: [15, "Location must be less than 15 characters!"],
  },
  formula: {
    type: String,
    required: [true, "Location is required!"],
    minLength: [3, "Location must be at least 3 characters!"],
    maxLength: [30, "Location must be less than 30 characters!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [10, "Description must be at least 10 characters!"],
  },
  likedList: [
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

const Stone = mongoose.model("Stone", stoneSchema);

module.exports = Stone;

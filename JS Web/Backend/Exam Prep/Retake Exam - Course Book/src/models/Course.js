const mongoose = require("mongoose");

// Create the schema for the Course object
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: [5, "Title must be at least 5 characters!"],
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
    minLength: [3, "Type must be at least 3 characters!"],
  },
  certificate: {
    type: String,
    required: [true, "Certificate is required!"],
    minLength: [2, "Certificate must be at least 2 characters!"],
  },
  imageUrl: {
    type: String,
    match: [/^https?:\/\/.*/, "Please enter a valid URL!"],
    required: [true, "Image URL is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [10, "Description must be at least 10 characters!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
    min: [0, "Price must be a positive number!"],
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
    },
  signUpList: [
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

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

const mongoose = require("mongoose");

// Create the schema for the Stone object
const electronicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: [10, "Name must be at least 10 characters!"],
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
    minLength: [2, "Type must be at least 2 characters!"],
  },
  damages: {
    type: String,
    required: [true, "Damanges is required!"],
    minLength: [10, "Damanges must be at least 10 characters!"],
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
    maxLength: [200, "Description must be less than 200 characters!"],
  },
  production: {
    type: Number,
    required: [true, "Production is required!"],
    minLength: [1900, "Production must be at least 1990!"],
    maxLength: [2023, "Production must be less than 2023!"],
  },
  exploitation: {
    type: Number,
    required: [true, "Exploitation is required!"],
    minLength: [0, "Exploitation must be at least 0!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
    minLength: [0, "Price must be at least 0!"],
  },

  byingList: [
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

const Electronic = mongoose.model("Electronic", electronicSchema);

module.exports = Electronic;

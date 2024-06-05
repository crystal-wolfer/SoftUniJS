const mongoose = require("mongoose");

// Creating the db template/schema for the cubes
const cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [5, "Name must be at least 5 characters long!"],
    match: [
      /^[A-Za-z1-9]+$/,
      "Name must contain only letters, numbers & whitespaces!",
    ],
  },
  description: {
    type: String,
    minLength: [20, "Description must be at least 5 characters long!"],
    match: [
      /^[A-Za-z1-9]+$/,
      "Description must contain only letters, numbers & whitespaces!",
    ],
  },
  imageUrl: {
    type: String,
    match: [
      /^https?:\/\/.*/,
      "Please enter a valid URL!"
    ],
    required: [true, "Image URL is required!"],
  },
  difficultyLevel: Number,
  accessories: [
    {
      type: mongoose.Types.ObjectId, //id of the accessory from the database mongoose integrated special type
      ref: "Accessory",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;

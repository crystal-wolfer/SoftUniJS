const mongoose = require("mongoose");

// Create the schema for the Movie object
const castSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },

  age: {
    type: Number,
    required: [true, "Age is required!"],
  },

  born: {
    type: String,
    required: [true, "Place is required!"],
  },

  character: {
    type: String,
    required: [true, "Character Name is required!"],
  },

  imageUrl: {
    type: String,
    required: [true, "Image URL is required!"],
  },
});

const Cast = mongoose.model("Cast", castSchema);

module.exports = Cast;

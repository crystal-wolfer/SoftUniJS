const mongoose = require("mongoose");

// Create the schema for the Creature object
const creatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: [2, "Name must be at least 2 characters!"],
  },
  species: {
    type: String,
    required: [true, "Species is required!"],
    minLength: [3, "Species must be at least 3 characters!"],
  },
  skinColor: {
    type: String,
    required: [true, "Skin Color is required!"],
    minLength: [3, "Skin Color must be at least 3 characters!"],
  },
  eyeColor: {
    type: String,
    required: [true, "Eye Color is required!"],
    minLength: [3, "Eye Color must be at least 3 characters!"],
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
    maxLength: [500, "Description must be less than or equal to 500 characters!"]
  },
  votesList: [
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

const Creature = mongoose.model("Creature", creatureSchema);

module.exports = Creature;

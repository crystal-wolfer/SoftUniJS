const mongoose = require("mongoose");

// Create the schema for the Movie object
const castSchema = new mongoose.Schema({
  name: String,
  age: Number,
  born: String,
  character: String,
  imageUrl: String,
});

const Cast = mongoose.model("Cast", castSchema);

module.exports = Cast;

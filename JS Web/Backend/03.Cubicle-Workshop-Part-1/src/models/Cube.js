const mongoose = require('mongoose')

// Creating the db template/schema for the cubes
const cubeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number
});

const Cube = mongoose.model('Cube', cubeSchema);
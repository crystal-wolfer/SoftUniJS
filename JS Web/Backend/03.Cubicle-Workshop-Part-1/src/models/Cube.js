const mongoose = require('mongoose')

// Creating the db template/schema for the cubes
const cubeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,
  accessories: [{
    type: mongoose.Types.ObjectId, //id of the accessory from the database mongoose integrated special type
    ref: 'Accessory'
  }]
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
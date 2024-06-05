const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
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
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;
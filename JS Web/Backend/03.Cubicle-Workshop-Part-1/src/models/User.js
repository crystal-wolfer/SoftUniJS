const mongoose = require('mongoose')

// Creating the db template/schema for the users
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
const User = require('../models/User.js')
const bcrypt = require('bcrypt')

exports.register = async (userData) => {
// validation will be done on data layer with mongoose
  const newUser = await User.create(userData);
  return newUser;
};

exports.login = async (username, password) => {
  // find the user in the database
  const user = await User.findOne({username});

  if (!user) {
    throw new Error(`Invalid username or password!`); 
  }

// compare the given password against the password stored in the database
  const isPassValid = await bcrypt.compare(password, user.password);
  if (!isPassValid) {
    throw new Error(`Invalid username or password!`); 
  }

  return user;
};
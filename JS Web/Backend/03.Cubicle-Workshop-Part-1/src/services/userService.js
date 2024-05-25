const User = require('../models/User.js')

exports.register = async (userData) => {
// validation will be done on data layer with mongoose
  const newUser = await User.create(userData);
  return newUser;
};
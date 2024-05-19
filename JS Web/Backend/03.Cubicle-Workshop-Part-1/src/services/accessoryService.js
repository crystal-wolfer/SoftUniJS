const Accessory = require('../models/Accessory.js')


exports.createAcc = async (accData) => {
  const newAcc = await Accessory.create(accData);
  return newAcc;
};
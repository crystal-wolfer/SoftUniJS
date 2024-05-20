const Accessory = require('../models/Accessory.js')


exports.createAcc = async (accData) => {
  const newAcc = await Accessory.create(accData);
  return newAcc;
};

exports.getAllAcc = async () => {
  const accessories = await Accessory.find().lean();
  return accessories;
}

exports.getNonAttachedAcc = async (accessoryIds) => {
  const accessories = await Accessory.find({_id: {$nin: accessoryIds}}).lean();
  return accessories;
}
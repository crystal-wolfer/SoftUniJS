const Cast = require("../models/Cast.js");


exports.createCast = async (castData) => {
  const newCast = await Cast.create(castData);
  return newCast;
};

exports.getAllCast = async () => {
  const cast = await Cast.find().lean();
  return cast;
}

exports.getNonAttachedCast = async (castId) => {
  const cast = await Cast.find({_id: {$nin: castId}}).lean();
  return cast;
};
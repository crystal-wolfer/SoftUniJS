const Stone = require("../models/Stone.js");

exports.createStone = async (stoneData) => {
  await Stone.validate(stoneData);
  const newStone = await Stone.create(stoneData);
  return newStone;
};

exports.getAllStones = async () => {
  let stones = await Stone.find().lean();
  return stones;
};

exports.getStone = async (id) => {
  const stone = await Stone.findById(id).lean();
  return stone;
};

exports.voteForStone = async (stoneId, userId) => {
  const stone = await Stone.findById(stoneId);
  stone.voteList.push(userId);
  return stone.save();
}


exports.deleteStone = async (stoneId) => {
  await Stone.findByIdAndDelete(stoneId);
  return;
};

exports.editStone = async (stoneId, stoneData) => {
  await Stone.validate(stoneData);
  await Stone.findByIdAndUpdate(stoneId, stoneData);
  return;
};

// TODO: This needs to be reworked
exports.search = async (name, typeStone) => {
  let stones = await Stone.find().lean();

  if (name) {
    stones = stones.filter((m) =>
      m.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (typeStone) {
    stones = stones.filter((m) =>
      m.typeStone.toLowerCase().includes(typeStone.toLowerCase())
    );
  }
  return stones;
};

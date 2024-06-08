const Volcano = require("../models/Volcano.js");

exports.createVolcano = async (volcanoData) => {
  await Volcano.validate(volcanoData);
  const newVolcano = await Volcano.create(volcanoData);
  return newVolcano;
};

exports.getAllVolcanos = async () => {
  let volcanos = await Volcano.find().lean();
  return volcanos;
};

exports.getVolcano = async (id) => {
  const volcano = await Volcano.findById(id).lean();
  return volcano;
};

exports.voteForVolcano = async (volcanoId, userId) => {
  const volcano = await Volcano.findById(volcanoId);
  volcano.voteList.push(userId);
  return volcano.save();
}


exports.deleteVolcano = async (volcanoId) => {
  await Volcano.findByIdAndDelete(volcanoId);
  return;
};

exports.editVolcano = async (volcanoId, volcanoData) => {
  await Volcano.validate(volcanoData);
  await Volcano.findByIdAndUpdate(volcanoId, volcanoData);
  return;
};

// TODO: This needs to be reworked
exports.search = async (name, typeVolcano) => {
  let volcanos = await Volcano.find().lean();

  if (name) {
    volcanos = volcanos.filter((m) =>
      m.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (typeVolcano) {
    volcanos = volcanos.filter((m) =>
      m.typeVolcano.toLowerCase().includes(typeVolcano.toLowerCase())
    );
  }
  return volcanos;
};

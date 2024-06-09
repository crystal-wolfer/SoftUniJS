const Electronic = require("../models/Electronic.js");

exports.create = async (electronicData) => {
  await Electronic.validate(electronicData);
  const newElectronic = await Electronic.create(electronicData);
  return newElectronic;
};

exports.getAll = async () => {
  let electronics = await Electronic.find().lean();
  return electronics;
};

exports.getOne = async (id) => {
  const electronic = await Electronic.findById(id).lean();
  return electronic;
};

// TODO: This needs to be renamed
exports.buy = async (electronicId, userId) => {
  const electronic = await Electronic.findById(electronicId);
  electronic.byingList.push(userId);
  return electronic.save();
}


exports.delete = async (electronicId) => {
  await Electronic.findByIdAndDelete(electronicId);
  return;
};

exports.edit = async (electronicId, electronicData) => {
  await Electronic.validate(electronicData);
  await Electronic.findByIdAndUpdate(electronicId, electronicData);
  return;
};

// TODO: This needs to be reworked
exports.search = async (name, type) => {
  let electronics = await Electronic.find().lean();

  if (name) {
    electronics = electronics.filter((m) =>
      m.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (type) {
    electronics = electronics.filter((m) =>
      m.type.toLowerCase().includes(type.toLowerCase())
    );
  }
  return electronics;
};

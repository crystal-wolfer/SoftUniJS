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

// TODO: Remove if not needed
// exports.getVolcanoWithCast = (id) => {
//   return Volcano.findById(id).populate('cast').lean(); //populate is integrated method that automatically poopulates all the data from the cast table it's better to segrerate them
// }

// TODO: Remove if not needed
// exports.addCast = async (castId, volcanoId) =>{
//   const volcano = await Volcano.findById(volcanoId);
//   volcano.cast.push(castId);

//   return volcano.save();
// }

// TODO: This needs to be reworked
// exports.search = async (search, genre, year) => {
//   let volcanos = await Volcano.find().lean();

//   if (search) {
//     volcanos = volcanos.filter((m) =>
//       m.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }

//   if (genre) {
//     volcanos = volcanos.filter((m) =>
//       m.genre.toLowerCase().includes(genre.toLowerCase())
//     );
//   }

//   if (year) {
//     volcanos = volcanos.filter((m) => Number(m.year) === Number(year));
//   }

//   return volcanos;
// };

exports.deleteVolcano = async (volcanoId) => {
  await Volcano.findByIdAndDelete(volcanoId);
  return;
};

exports.editVolcano = async (volcanoId, volcanoData) => {
  await Volcano.findByIdAndUpdate(volcanoId, volcanoData);
  return;
};

// const Stone = require("../models/Stone.js");

// exports.create = async (stoneData) => {
//   await Stone.validate(stoneData);
//   const newStone = await Stone.create(stoneData);
//   return newStone;
// };

// exports.getAll = async () => {
//   let stones = await Stone.find().lean();
//   return stones;
// };

// exports.getOne = async (id) => {
//   const stone = await Stone.findById(id).lean();
//   return stone;
// };


// //REMOVE IF NOT NEEDED - query that retrieves the last 3 entries from the database
// exports.getLastThree = async () => {
//   let courses = await Stone.find()
//   .sort({ createdAt: -1 })
//   .limit(3)
//   .lean();

//   return courses;
// };

// //REMOVE IF NOT NEEDED - query that retrieves the last 3 entries from the database
// exports.getEmails = async (id, path) => {
//   const data = await Stone.findById(id)
//     .populate({
//       path: path,
//       select:'email'
//     }).lean();

//   return data;
// };

// // TODO: This needs to be renamed
// exports.like = async (stoneId, userId) => {
//   const stone = await Stone.findById(stoneId);
//   stone.likedList.push(userId);
//   return stone.save();
// }


// exports.delete = async (stoneId) => {
//   await Stone.findByIdAndDelete(stoneId);
//   return;
// };

// exports.edit = async (stoneId, stoneData) => {
//   await Stone.validate(stoneData);
//   await Stone.findByIdAndUpdate(stoneId, stoneData);
//   return;
// };

// // TODO: This needs to be reworked
// exports.search = async (name, typeStone) => {
//   let stones = await Stone.find().lean();

//   if (name) {
//     stones = stones.filter((m) =>
//       m.name.toLowerCase().includes(name.toLowerCase())
//     );
//   }

//   if (typeStone) {
//     stones = stones.filter((m) =>
//       m.typeStone.toLowerCase().includes(typeStone.toLowerCase())
//     );
//   }
//   return stones;
// };

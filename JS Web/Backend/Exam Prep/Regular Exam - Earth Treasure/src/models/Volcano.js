// const mongoose = require("mongoose");

// // Create the schema for the Volcano object
// const volcanoSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Name is required!"],
//     minLength:[2, "Name must be at least 2 characters!"]
//   },
//   location: {
//     type: String,
//     required: [true, "Location is required!"],
//     minLength:[3, "Location must be at least 2 characters!"]
//   },
//   elevation: {
//     type: Number,
//     required: [true, "Elevation is required!"],
//     min: [0, "Elevation must be at least 0!"]
//   },
//   lastEruption: {
//     type: Number,
//     required: [true, "Year is required!"],
//     min: [0, "Year can't be less than 0!"],
//     max: [2024, "Year can't be more than 2024!"]
//   },
//   imageUrl: {
//     type: String,
//     match: [
//       /^https?:\/\/.*/,
//       "Please enter a valid URL!"
//     ],
//     required: [true, "Image URL is required!"],
//   },
//   typeVolcano: {
//     type: String,
//     required: [true, "Volcano type is required"],
//     enum: {
//       values: ["Supervolcanoes", "Submarine", "Subglacial", "Mud", "Stratovolcanoes", "Shield"],
//       message: "Value is not a valid type of volcano!"
//     }
//   },
//   description: {
//     type: String,
//     required: [true, "Description is required!"],
//     minLength:[10, "Description must be at least 10 characters!"]
//   },
//   voteList: [{
//     type: mongoose.Types.ObjectId,
//     ref: 'User',
//   }],
//   owner: {
//     type: mongoose.Types.ObjectId,
//     ref: 'User'
//   }
// });

// const Volcano = mongoose.model('Volcano', volcanoSchema);

// module.exports = Volcano;

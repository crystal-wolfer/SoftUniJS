// const mongoose = require("mongoose");

// // Create the schema for the Movie object
// const castSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     minLength: [5, "Name must be at least 5 characters!"],
//     match: [/^[A-Za-z1-9]+$/, "Name must be alphanumeric!"],
//     required: [true, "Name is required!"],
//   },
//   age: {
//     type: Number,
//     minLength: [1, "Age cannot be negative or 0!"],
//     maxLength: [120, "Age cannot be greater than 120!"],
//     required: [true, "Age is required!"],
//   },
//   born: {
//     type: String,
//     minLength: [10, "Born must be at least 10 characters!"],
//     match: [/^[A-Za-z1-9]+$/, "Born must be alphanumeric!"],
//     required: [true, "Born is required!"],
//   },
//   character: {
//     type: String,
//     minLength: [5, "Character name must be at least 5 characters!"],
//     match: [/^[A-Za-z1-9]+$/, "Character name must be alphanumeric!"],
//     required: [true, "Character name is required!"],
//   },
//   imageUrl: {
//     type: String,
//     match: [
//       /^https?:\/\/.*/,
//       "Please enter a valid URL!"
//     ],
//     required: [true, "Image URL is required!"],
//   },
// });

// const Cast = mongoose.model("Cast", castSchema);

// module.exports = Cast;

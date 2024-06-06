const { MongooseError } = require("mongoose");

// FUNCTION THAT GENERETES THE DIFFICULTY LEVER OPTIONS
exports.generateRating = (rating) => {
  const options = [];

  for (let i = 1; i <= 5; i + 1) {
    (title = "★".repeat(i)),
      (value = i),
      (selected = Number(rating) === Number(i));
    options.push({ title: title, value: value, selected: selected });
    i++;
  }

  return options;
};

// FUNCTION THAT RETURNS ERROR MESSAGES
exports.getErrorMessages = (error) => {
  if (error instanceof MongooseError || error.name === 'ValidationError') {
    const err = Object.values(error.errors).map((e) => e.message);
    return err;
  } else if (error.code === 11000) {
    let string = Object.keys(error.keyValue)[0];
    const err =
      string.charAt(0).toUpperCase() + string.slice(1) + " already exists";
    return [err];
  } else {
    return [error.message];
  }
};

// FUNCTION THAT RETURNS WHICH FIELDS ARE NOT COMPLYING
exports.getFields = (errorMessages) => {
  let fields = {};

  let values = {};

  errorMessages.forEach((m) => {
    if (m.includes("Name")) {
      fields.errorN = true;
    } else if (m.includes("Age")) {
      fields.errorA = true;
    } else if (m.includes("Born")) {
      fields.errorB = true;
    } else if (m.includes("Character")) {
      fields.errorC = true;
    } else if (m.includes("URL")) {
      fields.errorI = true;
    }
  });

  return fields;
};

const { MongooseError } = require("mongoose");

// FUNCTION THAT GENERETES THE DIFFICULTY LEVER OPTIONS
exports.generateOptions = (typeVolcano) => {
  const titles = [
    "Supervolcanoes",
    "Submarine",
    "Subglacial",
    "Mud",
    "Stratovolcanoes",
    "Shield",
  ];

  const options = titles.map((title, i) => ({
    title: title,
    value: title,
    selected: typeVolcano === title,
  }));

  return options;
};

// FUNCTION THAT RETURNS ERROR MESSAGES
exports.getErrorMessages = (error) => {
  if (error instanceof MongooseError || error.name === "ValidationError") {
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

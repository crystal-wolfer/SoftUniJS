const { MongooseError } = require("mongoose");

// FUNCTION THAT GENERETES THE DIFFICULTY LEVER OPTIONS
exports.generateDiffLevel = (difficultyLevel) => {
  const titles = [
    'Very Easy',
    'Easy',
    'Medium (Standard 3x3)',
    'Intermediate',
    'Expert',
    'Hardcore',
  ]

  const options = titles.map((title, i) => ({
    title: `${i+1} - ${title}`,
    value: i+1,
    selected: Number(difficultyLevel) === i+1

  }))

  return options;
}

// FUNCTION THAT RETURNS ERROR MESSAGES
exports.getErrorMessages = (error) => {
  if(error instanceof MongooseError){
    const err = Object.values(error.errors).map(e => e.message);
    return err;
  } else if (error.code === 11000){
    let string = Object.keys(error.keyValue)[0]
    const err = string.charAt(0).toUpperCase() + string.slice(1)  + " already exists";
    return [err];
  } else {
    return [error.message];
  }
};

// FUNCTION THAT RETURNS WHICH FIELDS ARE NOT COMPLYING
exports.getFields = (errorMessages) =>{
  let fields = {
    errorN: false,
    errorD: false,
    errorI: false,
  };
  errorMessages.forEach(m => {
    if ( m.includes("Name")){
      fields.errorN = true;
    } else if (m.includes("Description")){
      fields.errorD = true;
    } else if (m.includes("URL")){
      fields.errorI = true;
    }
  })
  
  return fields;
}
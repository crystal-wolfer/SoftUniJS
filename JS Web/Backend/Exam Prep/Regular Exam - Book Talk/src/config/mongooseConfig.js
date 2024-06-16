const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/SU-books'

async function dbConnect(){
  await mongoose.connect(URI);
}

module.exports = dbConnect;
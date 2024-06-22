const mongoose = require('mongoose');
// TODO: Change Name
const URI = 'mongodb://127.0.0.1:27017/SU-wizzards'

async function dbConnect(){
  await mongoose.connect(URI);
}

module.exports = dbConnect;
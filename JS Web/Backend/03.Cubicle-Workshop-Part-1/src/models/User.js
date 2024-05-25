const mongoose = require('mongoose')

// Creating the db template/schema for the users
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// repeatPass is not part of the schema definition so its not recognized initially. Workaround to make repeatPass visible to the Schema is to use the .virtual property which creates a virtual property that doesn't exist in the database later but is available to the Schema itself
userSchema.virtual('repeatPass')
  .set(function(value){
    if (value !== this.password){
      throw new mongoose.MongooseError('Paswords do not match!')
    }
  })

const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Creating the db template/schema for the users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,"Username field is required!"],
    minLength: [5, "Username must be at least 5 characters long!"],
    unique: [true, "Username already taken!"],
    match: [/^[A-Za-z0-9]+$/, "Username must be alphanumeric!"]
    },
  password: {
    type: String,
    required: [true,"Password field is required!"],
    minLength: [8, "Password must be at least 8 characters long!"],
    match: [/^[A-Za-z1-9]+$/, "Password must be alphanumeric!"],
  },
});

// repeatPass is not part of the schema definition so its not recognized initially. Workaround to make repeatPass visible to the Schema is to use the .virtual property which creates a virtual property that doesn't exist in the database later but is available to the Schema itself
userSchema.virtual('repeatPassword')
  .set(function(value){
    if (value !== this.password){
      throw new Error("Passwords do not match!")
    }
  })


// Hashing the password before creating it as a DB record using the .pre property which lists action before a specified operation is executed in our case the save operation (.post is a property that lists actions after given operation)
userSchema.pre('save', async function(){
  const hash = await bcrypt.hash(this.password, 10) //when passing a number that is already the rounds of salt that will be generated by the hashing algorithm

  this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;
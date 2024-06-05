const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Create the User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Repeat password is not in the schema so we need to create a new virtual instance of it to be able to validate the password. Workaround to make repeatPass visible to the Schema is to use the .virtual property which creates a virtual property that doesn't exist in the database later but is available to the Schema itself

userSchema.virtual("repeatPass")
  .set(function (value) {
    if (value !== this.password) {
      throw new mongoose.MongooseError("Paswords do not match!");
    }
  });


// Hashing the password before creating it as a DB record using the .pre property which lists action before a specified operation is executed in our case the save operation (.post is a property that lists actions after given operation)

userSchema.pre('save', async function(){
  const hash = await bcrypt.hash(this.password, 10) // this will add 10 rounds of salt to the password
  this.password = hash
})

const User = mongoose.model('User',userSchema)

module.exports = User;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Additional user-related fields
  firstName: String,
  lastName: String,
  dateOfBrith: Date,
  gender: String,
  phoneNumber: String,
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  profileImage: String, // URL to the user's profile picture
});
module.exports = mongoose.model("User", UserSchema);

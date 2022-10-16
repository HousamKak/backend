const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  email: {
    type: String,
    required: "email is required",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "password is required",
    select: false,
  },
  profile: {
    type: String,
    default: "default.jpg",
  },
  title: {
    type: String,
    default: " I am a new user",
  },
  about: {
    type: String,
    default: "Fill me with useful information",
  },
  cv: {
    type: String,
  },
  // user_type: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "UserType",
  // },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

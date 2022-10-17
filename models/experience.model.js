const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    default: "I am an education title",
  },
  body: {
    type: String,
    default: "I am an education body",
  },
  start_date: {
    type: String,
  },
  end_date: {
    type: String,
  },
});

const Experience = mongoose.model("User", experienceSchema);

module.exports = Experience;

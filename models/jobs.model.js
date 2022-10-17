const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
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
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    default: "I am a job title",
  },
  body: {
    type: String,
    default: "I am a job body",
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;

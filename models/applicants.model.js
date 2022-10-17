const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;

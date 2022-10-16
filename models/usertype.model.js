const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema({
  user_type: {
    type: String,
    required: "type is required",
  },
});

const UserType = mongoose.model("UserType", userTypeSchema);

module.exports = UserType;

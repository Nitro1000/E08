var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 255
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("User", userSchema);
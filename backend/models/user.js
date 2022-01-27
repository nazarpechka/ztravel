const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    maxLength: 32,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    minLength: 3,
    maxLength: 32,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: isEmail,
      message: "Invalid email.",
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxLength: 64,
  },
  name: {
    type: String,
    minLength: 3,
    maxLength: 16,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    minLength: 3,
    maxLength: 16,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);

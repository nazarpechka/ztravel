const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10).catch(next);
  next();
});

userSchema.methods.validatePassword = async function validatePassword(
  candidate
) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model("User", userSchema);

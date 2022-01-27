const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model("Tour", tourSchema);
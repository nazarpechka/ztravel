const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
  imageName: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);

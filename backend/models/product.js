const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  imageName: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

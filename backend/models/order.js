const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Product",
    minItems: 1,
    required: true,
  },
  shipping: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shipping",
    required: true,
  },
  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  city: {
    type: String,
    minLength: 2,
    required: true,
  },
  street: {
    type: String,
    minLength: 2,
    required: true,
  },
  postalCode: {
    type: Number,
    min: 0,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  fee: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);

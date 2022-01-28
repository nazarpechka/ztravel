const Payment = require("../models/payment");

const { NotFoundError } = require("../utils/errors");

module.exports = {
  createPayment: async (req, res, next) => {
    const payment = await Payment.create(req.body).catch(next);
    res.send(payment);
  },

  getPayment: async (req, res, next) => {
    const payment = await Payment.findById(req.params.id).catch(next);
    if (!paymnet) {
      return next(new NotFoundError("Payment not found!"));
    }
    res.send(payment);
  },

  getAllPayments: async (req, res, next) => {
    const payments = await Payment.find().catch(next);
    res.send(payments);
  },
};

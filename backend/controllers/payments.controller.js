const Payment = require("../models/Payment");

module.exports = {
  createPayment: (req, res) => {
    Payment.create(req.body, (err, payment) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(payment);
    });
  },

  getPayment: (req, res) => {
    Payment.findById(req.params.id, (err, payment) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!payment) {
        return res.status(404).send({ message: "No payment found!" });
      }

      return res.send(payment);
    });
  },

  getAllPayments: (req, res) => {
    Payment.find({}, (err, payments) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(payments);
    });
  },
};

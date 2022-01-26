const Shipping = require("../models/Shipping");

module.exports = {
  createShipping: (req, res) => {
    Shipping.create(req.body, (err, shipping) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(shipping);
    });
  },

  getAllShippings: (req, res) => {
    Shipping.find({}, (err, shippings) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(shippings);
    });
  },
};

const Shipping = require("../models/shipping");

module.exports = {
  createShipping: (req, res) => {
    Shipping.create(req.body, (err, shipping) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(shipping);
    });
  },

  getShipping: (req, res) => {
    Shipping.findById(req.params.id, (err, shipping) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!shipping) {
        return res.status(404).send({ message: "No shipping found!" });
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

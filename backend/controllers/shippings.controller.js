const Shipping = require("../models/shipping");

const { NotFoundError } = require("../utils/errors");

module.exports = {
  createShipping: async (req, res, next) => {
    const shipping = await Shipping.create(req.body).catch(next);
    res.send(shipping);
  },

  getShipping: async (req, res, next) => {
    const shipping = await Shipping.findById(req.params.id).catch(next);

    if (!shipping) {
      return next(new NotFoundError("Shipping not found!"));
    }

    res.send(shipping);
  },

  getAllShippings: async (req, res, next) => {
    const shippings = await Shipping.find().catch(next);
    res.send(shippings);
  },
};

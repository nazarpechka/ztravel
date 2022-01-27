const Order = require("../models/order");

module.exports = {
  getAllOrders: (req, res) => {
    Order.find({})
      .populate("products")
      .populate("shipping")
      .populate("payment")
      .exec((err, orders) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.send(orders);
      });
  },

  createOrder: (req, res) => {
    Order.create(req.body, (err, order) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(order);
    });
  },
};

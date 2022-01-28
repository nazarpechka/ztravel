const Order = require("../models/order");

module.exports = {
  getAllOrders: async (req, res, next) => {
    const orders = await Order.find()
      .populate("products")
      .populate("shipping")
      .populate("payment")
      .populate("user")
      .catch(next);
    res.send(orders);
  },

  createOrder: async (req, res, next) => {
    const order = await Order.create(req.body).catch(next);
    res.send(order);
  },
};

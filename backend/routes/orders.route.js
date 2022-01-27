const {
  createOrder,
  getAllOrders,
} = require("../controllers/orders.controller");

module.exports = (router) => {
  router.get("/orders", getAllOrders);
  router.post("/orders", createOrder);
};

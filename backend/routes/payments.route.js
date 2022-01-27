const {
  getAllPayments,
  getPayment,
  createPayment,
} = require("../controllers/payments.controller.js");

module.exports = (router) => {
  router.get("/payments", getAllPayments);
  router.get("/payments/:id", getPayment);
  router.post("/payments", createPayment);
};

const {
  getAllShippings,
  getShipping,
  createShipping,
} = require("../controllers/shippings.controller.js");

module.exports = (router) => {
  router.get("/shippings", getAllShippings);
  router.get("/shippings/:id", getShipping);
  router.post("/shippings", createShipping);
};

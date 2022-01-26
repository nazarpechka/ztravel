const {
  getAllShippings,
  createShipping,
} = require("../controllers/shippings.controller.js");

module.exports = (router) => {
  router.get("/shippings", getAllShippings);
  router.post("/shippings", createShipping);
};

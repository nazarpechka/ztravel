const bookings = require("./bookings.route");
const contacts = require("./contacts.route");
const tours = require("./tours.route");
const products = require("./products.route");

module.exports = (router) => {
  bookings(router);
  contacts(router);
  tours(router);
  products(router);

  return router;
};

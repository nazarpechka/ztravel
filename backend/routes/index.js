const bookings = require("./bookings.route");
const contacts = require("./contacts.route");
const tours = require("./tours.route");
const products = require("./products.route");
const categories = require("./categories.route");

module.exports = (router) => {
  bookings(router);
  contacts(router);
  tours(router);
  products(router);
  categories(router);

  return router;
};

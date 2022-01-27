const bookings = require("./bookings.route");
const contacts = require("./contacts.route");
const tours = require("./tours.route");
const products = require("./products.route");
const categories = require("./categories.route");
const shippings = require("./shippings.route");
const payments = require("./payments.route");
const orders = require("./orders.route");
const auth = require("./auth.route");

module.exports = (router) => {
  bookings(router);
  contacts(router);
  tours(router);
  products(router);
  categories(router);
  shippings(router);
  payments(router);
  orders(router);
  auth(router);

  return router;
};

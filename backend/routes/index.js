const bookings = require("./bookings.route");
const contacts = require("./contacts.route");
const tours = require("./tours.route");

module.exports = (router) => {
  bookings(router);
  contacts(router);
  tours(router);

  return router;
};

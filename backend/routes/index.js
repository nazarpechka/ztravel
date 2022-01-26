const bookings = require("./bookings");
const contacts = require("./contacts");
const tours = require("./tours");

module.exports = (router) => {
  bookings(router);
  contacts(router);
  tours(router);

  return router;
};

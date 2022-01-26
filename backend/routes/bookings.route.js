const { createBooking } = require("../controllers/bookings.controller");

module.exports = (router) => {
  router.post("/bookings", createBooking);
};

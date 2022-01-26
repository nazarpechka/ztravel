const { getAllTours, createTour } = require("../controllers/tours.controller");

module.exports = (router) => {
  router.get("/tours", getAllTours);
  router.post("/tours", createTour);
};

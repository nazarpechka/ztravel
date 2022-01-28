const Tour = require("../models/tour");

const { NotFoundError } = require("../utils/errors");

module.exports = {
  createTour: async (req, res, next) => {
    const tour = await Tour.create(req.body).catch(next);
    res.send(tour);
  },

  getAllTours: async (req, res, next) => {
    const tours = await Tour.find().catch(next);
    res.send(tours);
  },
};

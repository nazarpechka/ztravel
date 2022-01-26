const Tour = require("../models/tour");

module.exports = {
  createTour: (req, res) => {
    Tour.create(req.body, (err, tour) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(tour);
    });
  },

  getAllTours: (req, res) => {
    Tour.find({}, (err, tours) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(tours);
    });
  },
};

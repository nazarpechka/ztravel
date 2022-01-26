var express = require("express");
var router = express.Router();

const tours = [
  {
    name: "winter",
    label: "Zakopane in Winter",
  },
  {
    name: "thermal",
    label: "Thermal Baths in Zakopane",
  },
  {
    name: "lake",
    label: "Morskie Oko",
  },
  {
    name: "karpacz",
    label: "Mountain Hiking in Karpacz",
  },
];

router.get("/", (req, res, next) => {
  res.send(tours);
});

module.exports = router;

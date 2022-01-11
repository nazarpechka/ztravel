var express = require("express");
var router = express.Router();

const tours = {
  winter: "Zakopane in Winter",
  thermal: "Thermal Baths in Zakopane",
  lake: "Morskie Oko",
  karpacz: "Mountain Hiking in Karpacz",
};

router.get("/", (req, res, next) => {
  res.json({ statusCode: 200, tours });
});

module.exports = router;

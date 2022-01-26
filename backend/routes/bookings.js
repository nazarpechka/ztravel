var express = require("express");
var router = express.Router();

const requiredProps = [
  "name",
  "surname",
  "email",
  "phone",
  "tour",
  "guests",
  "checkin",
  "checkout",
];

const tours = ["winter", "thermal", "lake", "karpacz"];

router.post("/", (req, res, next) => {
  for (const prop of requiredProps) {
    if (!req.body[prop]) {
      return res.status(400).send({
        message: `You should provide a ${prop} value`,
      });
    }
  }

  let {
    name,
    surname,
    email,
    phone,
    tour,
    guests,
    checkin,
    checkout,
    message,
  } = req.body;

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).send({
      message: "Incorrect email",
    });
  }

  const phoneRegex = /^[0-9]*$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).send({
      message: "Incorrect phone",
    });
  }

  if (!tours.includes(tour)) {
    return res.status(400).send({
      message:
        "Incorrect tour, please use /tours endpoint to find correct values",
    });
  }

  if (isNaN(guests) || parseInt(guests) < 1) {
    return res.status(400).send({
      message: "Incorrect guests amount, it should be positive",
    });
  }

  const now = new Date();

  checkin = new Date(checkin);
  if (!isNaN(checkin) && checkin < now) {
    return res.status(400).send({
      message: "Checkin date should be in future",
    });
  }

  checkout = new Date(checkout);
  if (!isNaN(checkout) && checkout < now) {
    return res.status(400).send({
      message: "Checkout date should be in future",
    });
  }

  if (checkin >= checkout) {
    return res.status(400).send({
      message: "Checkin date should be before checkout date",
    });
  }

  console.log("Accepted booking");
  console.log(req.body);

  res.json({ statusCode: 200 });
});

module.exports = router;

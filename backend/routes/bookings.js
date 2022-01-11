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
      res.json({
        statusCode: 400,
        error: `You should provide a ${prop} value`,
      });
      return;
    } else if (req.body[prop].length < 3 || req.body[prop].length > 30) {
      res.json({
        statusCode: 400,
        error: `${prop} should be between 3 and 30 characters`,
      });
      return;
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

  if (!email.includes("@")) {
    res.json({
      statusCode: 400,
      error: "Incorrect email",
    });
    return;
  }

  const phoneRegex = /^[0-9]*$/;
  if (!phoneRegex.test(phone)) {
    res.json({
      statusCode: 400,
      error: "Incorrect phone",
    });
    return;
  }

  if (!tours.includes(tour)) {
    res.json({
      statusCode: 400,
      error:
        "Incorrect tour, please use /tours endpoint to find correct values",
    });
    return;
  }

  if (isNaN(guests) || parseInt(guests) < 1) {
    res.json({
      statusCode: 400,
      error: "Incorrect guests amount, it should be positive",
    });
    return;
  }

  const now = new Date();

  checkin = new Date(checkin);
  if (!isNaN(checkin) && checkin < now) {
    res.json({
      statusCode: 400,
      error: "Checkin date should be in future",
    });
    return;
  }

  checkout = new Date(checkout);
  if (!isNaN(checkout) && checkout < now) {
    res.json({
      statusCode: 400,
      error: "Checkout date should be in future",
    });
    return;
  }

  if (checkin >= checkout) {
    res.json({
      statusCode: 400,
      error: "Checkin date should be before checkout date",
    });
    return;
  }

  console.log({ checkin, checkout, now });

  console.log("Accepted booking");
  console.log(req.body);

  res.json({ statusCode: 200 });
});

module.exports = router;

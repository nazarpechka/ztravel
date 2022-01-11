var express = require("express");
var router = express.Router();

const requiredProps = ["name", "email", "phone", "message"];

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

  let { name, email, phone, message } = req.body;

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

  console.log("Accepted contact");
  console.log(req.body);

  res.json({ statusCode: 200 });
});

module.exports = router;

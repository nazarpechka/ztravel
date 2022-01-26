const requiredProps = ["name", "email", "phone", "message"];

module.exports = (router) => {
  router.post("/contacts", (req, res) => {
    for (const prop of requiredProps) {
      if (!req.body[prop]) {
        res.status(400).send({ message: `You should provide a ${prop} value` });
        return;
      } else if (req.body[prop].length < 3 || req.body[prop].length > 30) {
        res.status(400).send({
          message: `${prop} should be between 3 and 30 characters`,
        });
        return;
      }
    }

    let { name, email, phone, message } = req.body;

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({
        message: "Incorrect email",
      });
    }

    const phoneRegex = /^[0-9]*$/;
    if (!phoneRegex.test(phone)) {
      res.status(400).send({
        message: "Incorrect phone",
      });
      return;
    }

    console.log("Accepted contact");
    console.log(req.body);

    res.send();
  });
};

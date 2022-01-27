const User = require("../models/user");

module.exports = {
  createUser: (req, res) => {
    User.create(req.body, (err, user) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(user);
    });
  },

  loginUser: (req, res) => {
    // TODO
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!user) {
        return res.status(400).send({ message: "Invalid username!" });
      }

      if (user.password !== req.body.password) {
        return res.status(400).send({ message: "Invalid password!" });
      }

      // TODO
      return res.send(user);
    });
  },
};

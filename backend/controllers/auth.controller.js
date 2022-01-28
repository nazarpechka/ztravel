const User = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const { BadRequestError } = require("../utils/errors");

module.exports = {
  createUser: async (req, res, next) => {
    const user = await User.create(req.body).catch(next);
    res.send(user);
  },

  loginUser: (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        return next(new BadRequestError(info.message));
      }

      req.login(user, { session: false }, (err) => {
        if (err) {
          return next(err);
        }

        const token = jwt.sign({ sub: user._id }, process.env.SECRET_KEY, {
          expiresIn: 86400,
        });
        return res.json({ ...user.toObject(), token });
      });
    })(req, res);
  },
};

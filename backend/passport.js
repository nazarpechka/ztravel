const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username!" });
      }

      const isValid = bcrypt.compareSync(req.body.password, user.password);
      if (!isValid) {
        return done(null, false, { message: "Incorrect password!" });
      }

      return done(null, user);
    });
  })
);

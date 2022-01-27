const { createUser, loginUser } = require("../controllers/auth.controller");

module.exports = (router) => {
  router.post("/auth/signup", createUser);
  router.post("/auth/login", loginUser);
};

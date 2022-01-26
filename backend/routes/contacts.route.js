const { createContact } = require("../controllers/contacts.controller");

module.exports = (router) => {
  router.post("/contacts", createContact);
};

const {
  getAllCategories,
  createCategory,
  getCategory,
  getCategoryProducts,
} = require("../controllers/categories.controller");

module.exports = (router) => {
  router.get("/categories", getAllCategories);
  router.post("/categories", createCategory);
  router.get("/categories/:id", getCategory);
  router.get("/categories/:id/products", getCategoryProducts);
};

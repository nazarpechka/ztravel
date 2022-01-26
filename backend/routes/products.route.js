const {
  getAllProducts,
  createProduct,
} = require("../controllers/products.controller");

module.exports = (router) => {
  router.get("/products", getAllProducts);
  router.post("/products", createProduct);
};

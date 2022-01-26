const {
  getAllProducts,
  createProduct,
  getProduct,
  replaceProduct,
} = require("../controllers/products.controller");

module.exports = (router) => {
  router.get("/products", getAllProducts);
  router.post("/products", createProduct);
  router.get("/products/:id", getProduct);
  router.put("/products/:id", replaceProduct);
};

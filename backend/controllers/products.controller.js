const Product = require("../models/product");

module.exports = {
  getAllProducts: (req, res) => {
    Product.find({}, (err, products) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(products);
    });
  },

  createProduct: (req, res) => {
    Product.create(req.body, (err, product) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(product);
    });
  },
};

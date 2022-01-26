const Product = require("../models/product");

module.exports = {
  getAllProducts: (req, res) => {
    Product.find({})
      .populate("category")
      .exec((err, products) => {
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

  getProduct: (req, res) => {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!product) {
        return res.status(404).send({ message: "Category not found!" });
      }

      return res.send(product);
    });
  },

  replaceProduct: (req, res) => {
    console.log(req.body);
    Product.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      null,
      (err, product) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.send(product);
      }
    );
  },
};

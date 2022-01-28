const Product = require("../models/product");

const { NotFoundError } = require("../utils/errors");

module.exports = {
  getAllProducts: async (req, res, next) => {
    const products = await Product.find().populate("category").catch(next);
    res.send(products);
  },

  createProduct: async (req, res, next) => {
    const product = await Product.create(req.body).catch(next);
    res.send(product);
  },

  getProduct: async (req, res, next) => {
    const product = await Product.findById(req.params.id).catch(next);

    if (!product) {
      return next(new NotFoundError("Product not found!"));
    }

    res.send(product);
  },

  replaceProduct: async (req, res, next) => {
    const product = await Product.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      null
    ).catch(next);
    res.send(product);
  },
};

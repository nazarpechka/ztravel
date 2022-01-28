const Category = require("../models/category");
const Product = require("../models/product");

const { NotFoundError } = require("../utils/errors");

module.exports = {
  getAllCategories: async (req, res, next) => {
    const categories = await Category.find().catch(next);
    res.send(categories);
  },

  createCategory: async (req, res, next) => {
    const category = await Category.create(req.body).catch(next);
    res.send(category);
  },

  getCategory: async (req, res, next) => {
    const category = await Category.findById(req.params.id).catch(next);

    if (!category) {
      return next(new NotFoundError("Category not found!"));
    }

    res.send(category);
  },

  getCategoryProducts: async (req, res, next) => {
    const category = await Category.findById(req.params.id).catch(next);

    if (!category) {
      return next(new NotFoundError("Category not found!"));
    }

    const products = await Product.find({ category }).catch(next);
    res.send(products);
  },
};

const Category = require("../models/category");
const Product = require("../models/product");

module.exports = {
  getAllCategories: (req, res) => {
    Category.find({}, (err, categories) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(categories);
    });
  },

  createCategory: (req, res) => {
    Category.create(req.body, (err, category) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(category);
    });
  },

  getCategory: (req, res) => {
    Category.findById(req.params.id, (err, category) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!category) {
        return res.status(404).send({ message: "Category not found!" });
      }

      return res.send(category);
    });
  },

  getCategoryProducts: (req, res) => {
    Category.findById(req.params.id, (err, category) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!category) {
        return res.status(404).send({ message: "Category not found!" });
      }

      Product.find({ category }, (err, products) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.send(products);
      });
    });
  },
};

import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

import Section from "../Section";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  const fetchProducts = () => {
    axios
      .get("/api/products")
      .then(({ data }) => {
        let products = data;
        if (category) {
          products = products.filter(
            (product) => product.category.link === category
          );
        }
        setProducts(products);
      })
      .catch((err) => console.err(err));
  };

  const fetchCategories = () => {
    axios
      .get("/api/categories")
      .then(({ data }) => setCategories(data))
      .catch((err) => console.err(err));
  };

  useEffect(fetchCategories, []);
  useEffect(fetchProducts, [category]);

  return (
    <Section heading="Souvenirs Shop">
      {categories.length ? (
        <div className="flex gap-4 text-lg">
          <NavLink to="/shop" className="transition hover:text-blue-400">
            All
          </NavLink>
          {categories.map(({ name, link }) => (
            <NavLink
              key={link}
              className="transition hover:text-blue-400"
              to={`/shop/${link}/`}
            >
              {name}
            </NavLink>
          ))}
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
      {products.length ? (
        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </Section>
  );
};

export default Products;

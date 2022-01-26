import { useState, useEffect } from "react";
import axios from "axios";

import Section from "../Section";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("/api/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  useEffect(fetchProducts, []);

  return (
    <Section heading="Souvenirs Shop">
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

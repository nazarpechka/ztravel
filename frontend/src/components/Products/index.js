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
  console.log(products);

  return (
    <Section heading="Products">
      {products.length ? (
        <div className="flex flex-col md:flex-row gap-8">
          {products.map(({ _id, name, price, imageName }) => (
            <ProductCard
              key={_id}
              img={require(`../assets/${imageName}.jpg`)}
              name={name}
              price={price}
            />
          ))}
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </Section>
  );
};

export default Products;

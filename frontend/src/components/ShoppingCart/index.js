import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import ProductRow from "./ProductRow";
import Section from "../Section";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);

  const fetchCartProducts = async () => {
    let fetchedProducts = [];
    for (const [id, quantity] of Object.entries(cart)) {
      try {
        const response = await axios.get(`/api/products/${id}`);
        const product = await response.data;

        fetchedProducts.push({ ...product, quantity });
      } catch (err) {
        console.err(err);
      }
    }
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    fetchCartProducts();
  }, [cart]);

  return (
    <Section>
      {products.length ? (
        <div className="w-full flex">
          <div className="w-3/4 p-5">
            <h3 className="text-3xl text-medium">Shopping Cart</h3>
            <div className="grid grid-cols-4 justify-between gap-6 py-5 mt-4">
              <span>Product</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
            </div>
            {products.map((product) => (
              <ProductRow key={product._id} product={product} />
            ))}
          </div>
          <div className="w-1/4 p-5 border-l border-l-slate-400">
            <h3 className="text-2xl">Order Summary</h3>
            <div className="mt-4 py-5 uppercase flex justify-between">
              <span>
                {products.reduce((prev, curr) => prev + curr.quantity, 0)}{" "}
                Products
              </span>
              <span>
                {products
                  .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
                  .toFixed(2)}{" "}
                PLN
              </span>
            </div>
          </div>
        </div>
      ) : (
        <h4>Your cart is empty!</h4>
      )}
    </Section>
  );
};

export default ShoppingCart;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { setShippingMethod } from "../../actions/cart";

import Select from "../Select";
import Button from "../Button";
import ProductRow from "./ProductRow";
import Section from "../Section";

const ShoppingCart = () => {
  const dispatcher = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [shippings, setShippings] = useState([]);

  const fetchCartProducts = async () => {
    let fetchedProducts = [];
    for (const [id, quantity] of Object.entries(cart.products)) {
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

  const fetchShippings = () => {
    axios
      .get("/api/shippings")
      .then(({ data }) => {
        setShippings(data);
        dispatcher(setShippingMethod(data[0]._id));
      })
      .catch((err) => console.err(err));
  };

  useEffect(fetchShippings, []);
  useEffect(() => {
    fetchCartProducts();
  }, [cart.products]);

  return (
    <Section>
      {products.length ? (
        <div className="w-full flex">
          <div className="w-3/4">
            <h3 className="text-3xl font-medium">Shopping Cart</h3>
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
          <div className="w-1/4 px-5 border-l border-l-slate-400 flex flex-col justify-between">
            <div className="flex flex-col gap-2 uppercase">
              <h3 className="text-2xl">Order Summary</h3>
              <div className="flex items-center justify-between">
                <span>
                  {products.reduce((prev, curr) => prev + curr.quantity, 0)}{" "}
                  Products
                </span>
                <span className="text-lg font-medium">
                  {products
                    .reduce(
                      (prev, curr) => prev + curr.price * curr.quantity,
                      0
                    )
                    .toFixed(2)}{" "}
                  PLN
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="text-lg font-medium">
                  {
                    shippings.find((shipping) => shipping._id === cart.shipping)
                      .price
                  }{" "}
                  PLN
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span className="text-lg font-medium">
                  {(
                    products.reduce(
                      (prev, curr) => prev + curr.price * curr.quantity,
                      0
                    ) +
                    shippings.find((shipping) => shipping._id === cart.shipping)
                      .price
                  ).toFixed(2)}{" "}
                  PLN
                </span>
              </div>
            </div>

            <form className="flex flex-col gap-4">
              <Select
                label="Shipping method"
                name="shipping"
                options={shippings.map(({ name, _id }) => {
                  return { key: _id, val: name };
                })}
                value={cart.shipping._id}
                onChange={(e) => dispatcher(setShippingMethod(e.target.value))}
              />
              <div className="text-center">
                <NavLink to="/checkout">
                  <Button label="Checkout" />
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h3 className="text-3xl font-medium">Your cart is empty!</h3>
      )}
    </Section>
  );
};

export default ShoppingCart;

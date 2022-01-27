import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { setPaymentMethod } from "../../actions/order";

import Select from "../Select";
import Section from "../Section";
import Input from "../Input";
import Button from "../Button";

const Checkout = () => {
  const dispatcher = useDispatch();
  const order = useSelector((state) => state.order);
  const [products, setProducts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  const fetchCartProducts = async () => {
    let fetchedProducts = [];
    for (const [id, quantity] of Object.entries(order.products)) {
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

  const fetchPayments = () => {
    axios
      .get("/api/payments")
      .then(({ data }) => {
        setPayments(data);
        dispatcher(setPaymentMethod(data[0]._id));
      })
      .catch((err) => console.err(err));
  };

  const fetchShipping = () => {
    axios
      .get(`/api/shippings/${order.shipping}`)
      .then(({ data }) => setShipping(data))
      .catch((err) => console.err(err));
  };

  useEffect(fetchPayments, []);
  useEffect(() => {
    setPayment(payments.find((payment) => payment._id === order.payment));
  }, [payments, order.payment]);
  useEffect(() => {
    fetchCartProducts();
  }, [order.products]);
  useEffect(fetchShipping, []);

  if (!payment) {
    return null;
  }

  const productsAmount = products.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );
  const totalProducts = products.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const paymentFee = (totalProducts * payment.fee) / 100;

  return (
    <Section>
      {products.length && payment ? (
        <div className="w-full flex">
          <div className="w-3/4">
            <h3 className="text-3xl font-medium">Order Details</h3>
            <div className="w-full grid grid-cols-2 gap-16 pr-16">
              <div>
                <h4 className="text-2xl mt-2">
                  To proceed, please log in or register
                </h4>
                <form className="">
                  <Input label="Login" name="login" type="text" />
                  <Input label="Password" name="password" type="password" />
                  <Button label="Log in" className="mt-4" />
                </form>
              </div>
              <div>
                <h4 className="text-2xl mt-2">Shipping information</h4>
                <form className="">
                  <Input label="City" name="city" type="text" />
                  <Input label="Street" name="street" type="text" />
                  <Input label="Post code" name="post" type="number" />
                </form>
              </div>
            </div>
          </div>
          <div className="w-1/4 px-5 border-l border-l-slate-400 flex flex-col justify-between">
            <div className="flex flex-col gap-2 uppercase">
              <h3 className="text-2xl">Order Summary</h3>
              <div className="flex items-center justify-between">
                <span>{productsAmount} Products</span>
                <span className="text-lg font-medium">
                  {totalProducts.toFixed(2)} PLN
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="text-lg font-medium">
                  {shipping.price.toFixed(2)} PLN
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment Fee</span>
                <span className="text-lg font-medium">
                  {paymentFee.toFixed(2)} PLN
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span className="text-lg font-bold">
                  {(totalProducts + shipping.price + paymentFee).toFixed(2)} PLN
                </span>
              </div>
            </div>

            <form className="flex flex-col gap-4">
              <Select
                label="Payment method"
                name="payment"
                options={payments.map(({ name, _id }) => {
                  return { key: _id, val: name };
                })}
                value={order.payment._id}
                onChange={(e) => dispatcher(setPaymentMethod(e.target.value))}
              />
              <div className="text-center">
                <NavLink to="/payment">
                  <Button label="Purchase" />
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

export default Checkout;
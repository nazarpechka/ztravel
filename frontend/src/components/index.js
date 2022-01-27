import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { setPaymentMethod } from "../../actions/order";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

import Select from "../Select";
import Section from "../Section";
import Input from "../Input";
import Button from "../Button";

const Checkout = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const order = useSelector((state) => state.order);
  const [payments, setPayments] = useState([]);
  const [adress, setAdress] = useState({
    city: "",
    street: "",
    postalCode: "",
  });

  const fetchPayments = () => {
    axios
      .get("/api/payments")
      .then(({ data }) => {
        setPayments(data);
        dispatcher(setPaymentMethod(data[0]));
      })
      .catch((err) => console.error(err));
  };

  const onAdressChange = (e) => {
    const target = e.target;
    setAdress({
      ...adress,
      [target.name]: target.value,
    });
  };

  const sendOrder = (e) => {
    e.preventDefault();
    const preparedOrder = {
      products: order.products.map((product) => product._id),
      shipping: order.shipping._id,
      payment: order.payment._id,
      ...adress,
    };

    axios
      .post("/api/orders", preparedOrder)
      .then(({ data }) => navigate("/payment"))
      .catch((err) => console.error(err));
  };

  useEffect(fetchPayments, []);

  const productsAmount = order.products.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );
  const totalProducts = order.products.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const paymentFee = (totalProducts * order.payment.fee) / 100;

  return (
    <Section>
      {order.products.length && order.payment ? (
        <div className="w-full flex">
          <div className="w-3/4">
            <h3 className="text-3xl font-medium">Order Details</h3>
            <div className="w-full grid grid-cols-2 gap-16 pr-16">
              <div>
                <h4 className="text-2xl mt-2">
                  To proceed, please log in or register
                </h4>
                <RegisterForm />
                <LoginForm />
              </div>
              <div>
                <h4 className="text-2xl mt-2">Shipping information</h4>
                <form className="">
                  <Input
                    label="City"
                    name="city"
                    type="text"
                    value={adress.city}
                    onChange={onAdressChange}
                  />
                  <Input
                    label="Street"
                    name="street"
                    type="text"
                    value={adress.street}
                    onChange={onAdressChange}
                  />
                  <Input
                    label="Post code"
                    name="postalCode"
                    type="number"
                    value={adress.postalCode}
                    onChange={onAdressChange}
                  />
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
                  {order.shipping.price.toFixed(2)} PLN
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
                  {(totalProducts + order.shipping.price + paymentFee).toFixed(
                    2
                  )}{" "}
                  PLN
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
                onChange={(e) =>
                  dispatcher(
                    setPaymentMethod(
                      payments.find((payment) => payment._id === e.target.value)
                    )
                  )
                }
              />
              <div className="text-center">
                <Button onClick={sendOrder} label="Purchase" />
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

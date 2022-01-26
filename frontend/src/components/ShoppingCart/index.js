import { useSelector } from "react-redux";

import ProductRow from "./ProductRow";
import Section from "../Section";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Section>
      <div className="w-full flex gap-16">
        <div className="p-5 flex flex-col items-start">
          <h3 className="text-3xl text-medium">Shopping Cart</h3>
          <div className="w-full grid grid-cols-4 justify-between gap-6 py-5 mt-4">
            <span>Product</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          {Object.entries(cart).map(([id, quantity]) => (
            <ProductRow key={id} productId={id} quantity={quantity} />
          ))}
        </div>
        <div className="p-5 border-l border-l-slate-400">
          <h3 className="text-2xl">Order Summary</h3>
        </div>
      </div>
    </Section>
  );
};

export default ShoppingCart;

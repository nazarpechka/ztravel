import Button from "../Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions/order";

const checkbox = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-3 inline-block h-5 w-5 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ProductCard = ({ product }) => {
  const { name, price, imageName, _id } = product;
  const img = require(`../assets/${imageName}.jpg`);

  const dispatcher = useDispatch();
  const order = useSelector((state) => state.order);
  const [addedToCart, setAddedToCart] = useState(_id in order.products);

  return (
    <div className="w-64 h-96 rounded-md shadow-lg overflow-hidden relative">
      <img src={img} alt={name} className="w-full h-1/2 object-cover" />
      <div className="p-3 h-1/2 flex flex-col justify-end gap-4 items-center">
        <p className="text-xl text-center">{name}</p>
        <p className="text-lg text-gray-600">{price + " PLN"}</p>
        <Button
          label={addedToCart ? "Added" : "Add to cart"}
          onClick={() => {
            setAddedToCart(true);
            dispatcher(addProduct(_id));
          }}
        >
          {addedToCart && checkbox}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

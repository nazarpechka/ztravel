import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cart";

const minus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block h-7 w-7"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
      clipRule="evenodd"
    />
  </svg>
);

const plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block h-7 w-7"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
      clipRule="evenodd"
    />
  </svg>
);

const ProductRow = ({ productId, quantity }) => {
  const [product, setProduct] = useState();
  const dispatcher = useDispatch();

  const fetchProduct = () => {
    axios
      .get(`/api/products/${productId}`)
      .then(({ data }) => setProduct(data))
      .catch((err) => console.err(err));
  };

  useEffect(fetchProduct, [productId]);

  return product ? (
    <div className="w-full grid grid-cols-4 items-center gap-6 py-5 text-lg">
      <div className="flex gap-2">
        <img
          src={require(`../assets/${product.imageName}.jpg`)}
          alt={product.name}
          className="h-16"
        />
        <span>{product.name}</span>
      </div>

      <div className="flex gap-2 items-center">
        <span
          onClick={() => dispatcher(removeFromCart(productId))}
          className="transition hover:cursor-pointer hover:scale-105"
        >
          {minus}
        </span>
        <span>{quantity}</span>
        <span
          onClick={() => dispatcher(addToCart(productId))}
          className="transition hover:cursor-pointer hover:scale-105"
        >
          {plus}
        </span>
      </div>

      <span>{product.price + " PLN"}</span>
      <span>{product.price * quantity + " PLN"} </span>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProductRow;

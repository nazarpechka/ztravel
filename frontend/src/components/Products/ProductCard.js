import Button from "../Button";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="w-64 h-auto rounded-md shadow-lg overflow-hidden relative">
      <img src={img} alt={name} className="w-full h-2/3 object-cover" />
      <div className="p-3 h-1/3 flex flex-col justify-end">
        <p className="text-xl">{name}</p>
        <p className="text-lg text-gray-600">{price + " PLN"}</p>
        <Button label="Add to cart" />
      </div>
    </div>
  );
};

export default ProductCard;

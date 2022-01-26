import Button from "../Button";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="w-64 rounded-md shadow-lg overflow-hidden">
      <img src={img} alt={name} className="w-full h-1/2 object-cover" />
      <div className="p-3 flex flex-col gap-3 items-center">
        <p className="text-xl">{name}</p>
        <p className="text-lg text-gray-600">{price + " PLN"}</p>
        <Button label="Add to cart" />
      </div>
    </div>
  );
};

export default ProductCard;

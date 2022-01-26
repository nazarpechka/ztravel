import Hero from "../components/Hero";
import ShoppingCart from "../components/ShoppingCart";
import img from "./assets/hero.jpg";

const Order = () => {
  return (
    <>
      <Hero
        img={img}
        heading="Your purchases"
        subheading="Proceed with your order"
      />
      <ShoppingCart />
    </>
  );
};

export default Order;

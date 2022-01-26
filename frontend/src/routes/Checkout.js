import Hero from "../components/Hero";
import OrderCheckout from "../components/OrderCheckout";
import img from "./assets/hero.jpg";

const Checkout = () => {
  return (
    <>
      <Hero
        img={img}
        heading="Your purchases"
        subheading="Proceed with your order"
      />
      <OrderCheckout />
    </>
  );
};

export default Checkout;

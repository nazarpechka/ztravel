import Hero from "../components/Hero";
import Products from "../components/Products";
import img from "./assets/hero.jpg";

const Shop = () => {
  return (
    <>
      <Hero
        img={img}
        heading="Zakopane Travel Shop"
        subheading="Order a part of the mountains beauty"
      />
      <Products />
    </>
  );
};

export default Shop;

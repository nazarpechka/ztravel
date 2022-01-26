import Hero from "../components/Hero";
import Footer from "../components/Footer";
import img from "./assets/hero.jpg";

const Shop = () => {
  return (
    <main>
      <Hero
        img={img}
        heading="Zakopane Travel Shop"
        subheading="Order a part of the mountains beauty"
      />
      <Footer />
    </main>
  );
};

export default Shop;

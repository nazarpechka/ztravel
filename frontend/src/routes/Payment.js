import Hero from "../components/Hero";
import Section from "../components/Section";
import img from "./assets/hero.jpg";

const Checkout = () => {
  return (
    <>
      <Hero img={img} heading="Thank you" />
      <Section heading="Thank you for placing an order!">
        {" "}
        <p>We will contact you soon.</p>
      </Section>
    </>
  );
};

export default Checkout;

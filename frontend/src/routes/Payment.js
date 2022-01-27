import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetOrder } from "../actions/order";

import Hero from "../components/Hero";
import Section from "../components/Section";
import img from "./assets/hero.jpg";

const Checkout = () => {
  const dispatcher = useDispatch();

  useEffect(() => dispatcher(resetOrder()), []);

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

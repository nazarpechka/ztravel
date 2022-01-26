import DestinationCard from "./DestinationCard";
import zakopane from "../assets/zakopane.jpg";
import karpacz from "../assets/karpacz.jpg";
import morskieoko from "../assets/morskieoko.jpg";
import sleza from "../assets/sleza.jpg";

import Section from "../Section";

const PopularTours = () => {
  return (
    <Section heading="Popular Destinations">
      <div className="flex flex-col md:flex-row gap-8">
        <DestinationCard img={zakopane} name="Zakopane" />
        <DestinationCard img={karpacz} name="Karpacz" />
        <DestinationCard img={morskieoko} name="Morskie Oko" />
        <DestinationCard img={sleza} name="Ślęża" />
      </div>
    </Section>
  );
};

export default PopularTours;

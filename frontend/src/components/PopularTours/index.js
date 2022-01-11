import DestinationCard from "./DestinationCard";
import zakopane from "./assets/zakopane.jpg";
import karpacz from "./assets/karpacz.jpg";
import morskieoko from "./assets/morskieoko.jpg";
import sleza from "./assets/sleza.jpg";

const PopularTours = () => {
  return (
    <section className="container m-auto px-36 py-8 flex flex-col items-center">
      <h3 className="text-4xl mb-8">Popular Destinations</h3>
      <div className="flex flex-col md:flex-row gap-8">
        <DestinationCard img={zakopane} name="Zakopane" />
        <DestinationCard img={karpacz} name="Karpacz" />
        <DestinationCard img={morskieoko} name="Morskie Oko" />
        <DestinationCard img={sleza} name="Ślęża" />
      </div>
    </section>
  );
};

export default PopularTours;

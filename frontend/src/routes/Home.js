import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import PopularTours from "../components/PopularTours";
import VideoSection from "../components/VideoSection";
import ContactForm from "../components/ContactForm";
import img from "./assets/hero.jpg";

const Home = () => {
  return (
    <>
      <Hero
        img={img}
        heading="Beautiful Places of Zakopane"
        subheading="Discover amazing mountain nature and fun experiences"
      >
        <SearchForm />
      </Hero>
      <PopularTours />
      <VideoSection />
      <ContactForm />
    </>
  );
};

export default Home;

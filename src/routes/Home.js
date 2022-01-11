import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import PopularTours from "../components/PopularTours";
import VideoSection from "../components/VideoSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import img from "./assets/hero.jpg";

const Home = () => {
  return (
    <main>
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
      <Footer />
    </main>
  );
};

export default Home;

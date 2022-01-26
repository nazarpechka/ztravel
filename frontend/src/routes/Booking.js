import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import VideoSection from "../components/VideoSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import img from "./assets/hero.jpg";

const Booking = () => {
  return (
    <main>
      <Hero
        img={img}
        heading="Book the trip of your dream"
        subheading="We are available in both winter and summer"
      />
      <BookingForm />
      <VideoSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Booking;

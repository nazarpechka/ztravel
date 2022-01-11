import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import { useParams } from "react-router-dom";

const tours = {
  winter: "Zakopane in Winter",
  thermal: "Thermal Baths in Zakopane",
  lake: "Morskie Oko",
  karpacz: "Mountain Hiking in Karpacz",
};

const BookingForm = () => {
  return (
    <section className="container m-auto px-96 py-8">
      <h3 className="text-4xl mb-8 text-center">Book a tour</h3>
      <form className="w-full">
        <Input label="Name" name="name" type="text" placeholder="Your name" />
        <Input
          label="Surname"
          name="surname"
          type="text"
          placeholder="Your surname"
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="Your email"
        />
        <Input
          label="Phone Number"
          name="tel"
          type="number"
          placeholder="Your Phone Number"
        />
        <Select label="Tour" name="tour" options={tours} />
        <div className="flex gap-2 justify-between">
          <Input label="Guests" name="guests" type="number" />
          <Input label="Check-in" name="checkin" type="date" />
          <Input label="Check-out" name="checkout" type="date" />
        </div>

        <textarea
          name="message"
          id="message"
          rows="3"
          placeholder="Comments"
          className="w-full my-4 focus:border-secondary focus:ring-secondary border border-gray-300 rounded-md"
        ></textarea>

        <div className="text-center mt-4">
          <Button label="Submit" />
        </div>
      </form>
    </section>
  );
};

export default BookingForm;

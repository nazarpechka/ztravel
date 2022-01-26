import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

const BookingForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [tours, setTours] = useState([{ label: "Loading" }]);

  useEffect(() => {
    axios
      .get("/api/tours")
      .then(({ data }) => {
        setTours(data);
      })
      .catch(() => {
        setTours([{ label: "Error loading tours" }]);
      });
  }, []);

  const [info, setInfo] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    tour: searchParams.get("tour") || "",
    guests: searchParams.get("guests") || 1,
    checkin:
      searchParams.get("checkin") || new Date().toISOString().substring(0, 10),
    checkout:
      searchParams.get("checkout") ||
      new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .substring(0, 10),
    message: "",
  });

  const onChange = (e) => {
    const target = e.target;
    let val = target.value;
    if (target.type === "tel" || target.type === "number") {
      val = val.replace(/\D/g, "");
    }
    setInfo({
      ...info,
      [target.name]: val,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const error = document.querySelector("#booking-error");
    const success = document.querySelector("#booking-success");

    axios
      .post("/api/bookings", info)
      .then(() => {
        error.textContent = "";
        success.textContent = "Booking confirmed!";
      })
      .catch((err) => {
        success.textContent = "";
        error.textContent = err.response
          ? err.response.data.message
          : err.message;
      });
  };

  return (
    <section className="container m-auto px-96 py-8">
      <h3 className="text-4xl mb-8 text-center">Book a tour</h3>
      <form className="w-full" onSubmit={onSubmit}>
        <Input
          label="Name"
          name="name"
          type="text"
          value={info.name}
          onChange={onChange}
          placeholder="Your name"
        />
        <Input
          label="Surname"
          name="surname"
          type="text"
          value={info.surname}
          onChange={onChange}
          placeholder="Your surname"
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={info.email}
          onChange={onChange}
          placeholder="Your email"
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={info.phone}
          onChange={onChange}
          placeholder="Your Phone Number"
        />
        <Select
          label="Tour"
          name="tour"
          options={tours}
          value={info.tour}
          onChange={onChange}
        />
        <div className="flex gap-2 justify-between">
          <Input
            label="Guests"
            name="guests"
            type="number"
            value={info.guests}
            onChange={onChange}
          />
          <Input
            label="Check-in"
            name="checkin"
            type="date"
            value={info.checkin}
            onChange={onChange}
          />
          <Input
            label="Check-out"
            name="checkout"
            type="date"
            value={info.checkout}
            onChange={onChange}
          />
        </div>

        <textarea
          name="message"
          id="message"
          rows="3"
          placeholder="Comments"
          value={info.message}
          onChange={onChange}
          className="w-full my-4 focus:border-secondary focus:ring-secondary border border-gray-300 rounded-md"
        ></textarea>

        <div className="text-center mt-4 ">
          <span className="block text-red-500" id="booking-error"></span>
          <span className="block text-green-500" id="booking-success"></span>
          <Button label="Submit" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default BookingForm;

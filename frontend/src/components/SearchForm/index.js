import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./SearchInput";
import Select from "./SearchSelect";
import Button from "../Button";

const icons = {
  tour: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
      />
    </svg>
  ),
  date: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  guest: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
};

const SearchForm = () => {
  const [info, setInfo] = useState({
    tour: "winter",
    checkin: new Date().toISOString().substring(0, 10),
    checkout: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .substring(0, 10),
    guests: 1,
  });

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

  const onChange = (e) => {
    const target = e.target;
    setInfo({
      ...info,
      [target.name]: target.value,
    });
  };

  return (
    <div className="container mx-auto w-full rounded-md p-8 mb-4 bg-white bg-opacity-5 backdrop-blur-2xl">
      <h3 className="text-lg font-bold mb-2">Book your vacation</h3>
      <form action="/booking">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row">
            <Select
              icon={icons.tour}
              label="Tour"
              name="tour"
              options={tours.map(({ _id, name }) => {
                return { key: _id, val: name };
              })}
              first={true}
              value={info.tour}
              onChange={onChange}
            />
            <Input
              icon={icons.date}
              label="Check-in"
              name="checkin"
              type="date"
              value={info.checkin}
              onChange={onChange}
            />
            <Input
              icon={icons.date}
              label="Check-out"
              name="checkout"
              type="date"
              value={info.checkout}
              onChange={onChange}
            />
            <Input
              icon={icons.guest}
              label="Guests"
              name="guests"
              type="number"
              last={true}
              value={info.guests}
              onChange={onChange}
            />
          </div>
          <Button label="Search" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

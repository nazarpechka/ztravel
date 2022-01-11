import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container m-auto text-white py-8 flex justify-between">
        <ul className="flex flex-col gap-2">
          <li className="text-xl font-bold">
            <Link to="/">Zakopane Travel</Link>
          </li>
          <li>About Us</li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-xl font-bold">Contacts</li>
          <li className="flex gap-2">
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>123-456-789</span>
          </li>
          <li className="flex gap-2">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Wroclaw, Ducha 23</span>
          </li>
          <li className="flex gap-2">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Mon - Sat 8.00 - 18.00</span>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>We are all about travel</li>
          <li>©2021 Zakopane Travel</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/booking",
    label: "Booking",
  },
  {
    to: "/shop",
    label: "Shop",
  },
];

const Nav = () => {
  return (
    <nav>
      <div className="container flex m-auto justify-between py-8 border-b border-white border-opacity-25">
        <h1 className="font-bold text-lg">
          <NavLink to="/">Zakopane Travel</NavLink>
        </h1>
        <ul className="flex gap-6 font-light">
          {links.map(({ to, label }) => (
            <li className="cursor-pointer">
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

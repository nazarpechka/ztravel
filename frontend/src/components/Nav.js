import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container flex m-auto justify-between py-8 border-b border-white border-opacity-25">
        <h1 className="font-bold text-lg">
          <NavLink to="/">Zakopane Travel</NavLink>
        </h1>
        <ul className="flex gap-6 font-light">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

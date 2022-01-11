import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container flex m-auto justify-between py-8 border-b border-white border-opacity-25">
        <h1 className="font-bold">
          <Link to="/">Zakopane Travel</Link>
        </h1>
        <ul className="flex gap-6 font-light">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/">Sign in</Link>
          </li>
          <li>
            <Link to="/">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

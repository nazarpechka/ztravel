import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const order = useSelector((state) => state.order);

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
    {
      to: "/cart",
      label: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span>{order.products.length}</span>
        </>
      ),
    },
  ];

  return (
    <nav>
      <div className="container flex m-auto justify-between py-8 border-b border-white border-opacity-25">
        <h1 className="font-bold text-lg">
          <NavLink to="/">Zakopane Travel</NavLink>
        </h1>
        <ul className="flex gap-6 font-light items-center text-lg">
          {links.map(({ to, label }) => (
            <li className="cursor-pointer" key={to}>
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

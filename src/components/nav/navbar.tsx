import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex text-white gap-4 text-4xl">
      <NavLink className="hover:text-red-500" to="/">
        Home
      </NavLink>
      <NavLink className="hover:text-red-500" to="/about">
        About
      </NavLink>
      <NavLink className="hover:text-red-500" to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default NavBar;

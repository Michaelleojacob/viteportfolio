import { NavLink } from "react-router-dom";

const NavLgScreen = () => {
  return (
    <div className="flex gap-4">
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
export default NavLgScreen;

import { List } from "@mui/material";
import NavItem from "../../../navItems/navItem";
import { SlHome } from "react-icons/sl";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

const BurgerMenu = () => {
  return (
    <div className="bg-menu text-white p-2">
      <List>
        <NavItem to="/" label="home" Icon={<SlHome />}></NavItem>
        <NavItem to="/about" label="about" Icon={<BsInfoCircle />}></NavItem>
        <NavItem to="/contact" label="contact" Icon={<BiMailSend />}></NavItem>
        <NavItem
          to="/apps"
          label="apps"
          Icon={<AiOutlineAppstoreAdd />}
        ></NavItem>
      </List>
    </div>
  );
};

export default BurgerMenu;

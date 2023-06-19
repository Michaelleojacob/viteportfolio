import { Box, List } from "@mui/material";
import NavItem from "./navButtons/lgNavButtons";

const NavLgScreen = () => {
  return (
    <Box className="w-full">
      <List>
        <NavItem to="/" label="home" />
        <NavItem to="/about" label="about" />
        <NavItem to="/contact" label="contact" />
        <NavItem to="/apps" label="apps" />
      </List>
    </Box>
  );
};
export default NavLgScreen;

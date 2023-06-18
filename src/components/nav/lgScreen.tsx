import { NavLink, useLocation } from "react-router-dom";
import { Box, List, ListItemButton } from "@mui/material";

const NavLgScreen = () => {
  const location = useLocation();

  return (
    <Box>
      <List>
        <NavLink to="">
          <ListItemButton selected={location.pathname === "/"}>
            home
          </ListItemButton>
        </NavLink>
        <NavLink to="/about">
          <ListItemButton selected={location.pathname === "/about"}>
            about
          </ListItemButton>
        </NavLink>
        <NavLink to="/contact">
          <ListItemButton selected={location.pathname === "/contact"}>
            contact
          </ListItemButton>
        </NavLink>
      </List>
    </Box>
  );
};
export default NavLgScreen;

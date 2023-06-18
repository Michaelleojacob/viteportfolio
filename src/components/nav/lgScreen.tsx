import { NavLink, useLocation } from "react-router-dom";
import { Box, List, ListItemButton } from "@mui/material";

const NavLgScreen = () => {
  const location = useLocation();

  return (
    <Box className="w-full">
      <List>
        <NavLink to="">
          <ListItemButton
            selected={location.pathname === "/"}
            sx={{ justifyContent: "center" }}
          >
            home
          </ListItemButton>
        </NavLink>
        <NavLink to="/about">
          <ListItemButton
            selected={location.pathname === "/about"}
            sx={{ justifyContent: "center" }}
          >
            about
          </ListItemButton>
        </NavLink>
        <NavLink to="/contact">
          <ListItemButton
            selected={location.pathname === "/contact"}
            sx={{ justifyContent: "center" }}
          >
            contact
          </ListItemButton>
        </NavLink>
      </List>
    </Box>
  );
};
export default NavLgScreen;

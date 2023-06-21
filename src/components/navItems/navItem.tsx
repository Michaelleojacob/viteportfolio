import { NavLink, useLocation } from "react-router-dom";
import { ListItemButton } from "@mui/material";
import { NavItemProps } from "../../types";

const NavItem = ({ to, label, Icon }: NavItemProps) => {
  const location = useLocation();

  return (
    <NavLink to={to}>
      <ListItemButton
        selected={location.pathname === to}
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: location.pathname === to ? undefined : "#143055",
          },
          "&.Mui-selected": {
            backgroundColor: "#037fff", // Change to your desired selected background color
            color: "white", // Change to your desired selected text color
            "&:hover": {
              backgroundColor: "#037fff", // Change to your desired selected background color
            },
          },
        }}
      >
        <span>{Icon}</span>
        <span>{label}</span>
      </ListItemButton>
    </NavLink>
  );
};

export default NavItem;

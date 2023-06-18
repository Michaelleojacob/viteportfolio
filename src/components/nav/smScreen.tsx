import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

const NavSmScreen = () => {
  return (
    <div>
      <Button variant="contained" sx={{ fontSize: "2rem" }}>
        <MenuIcon sx={{ fontSize: "2rem" }} />
      </Button>
    </div>
  );
};

export default NavSmScreen;

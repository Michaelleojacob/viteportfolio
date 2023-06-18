import Button from "@mui/material/Button";
import { GiHamburgerMenu } from "react-icons/gi";

const NavSmScreen = () => {
  return (
    <div>
      <Button variant="contained" sx={{ fontSize: "2rem" }}>
        <GiHamburgerMenu />
      </Button>
    </div>
  );
};

export default NavSmScreen;

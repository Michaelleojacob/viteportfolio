import { useState } from "react";
import { Box, Drawer, Button } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerMenu from "../../smLayout/nav/burgerMenu";

const NavSmScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  return (
    <div className="sticky top-0 text-end m-r-2">
      <Button onClick={toggleDrawer(true)} variant="contained">
        <GiHamburgerMenu className="text-3xl" />
      </Button>
      <Drawer
        anchor="top"
        open={isOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <BurgerMenu />
        </Box>
      </Drawer>
    </div>
  );
};

export default NavSmScreen;

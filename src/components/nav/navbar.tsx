import { useContext } from "react";
import { ScreenSizeContext } from "../../contextProviders/screenSizeContext";
import NavLgScreen from "./lgScreen";
import NavSmScreen from "./smScreen";

const NavBar = () => {
  const screenSize = useContext(ScreenSizeContext);
  return (
    <div className="flex p-4 border-b-4 border-borderColor">
      {screenSize === "small" ? <NavSmScreen /> : <NavLgScreen />}
    </div>
  );
};

export default NavBar;

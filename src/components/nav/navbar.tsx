import { useContext } from "react";
import { ScreenSizeContext } from "../../contextProviders/screenSizeContext";
import NavLgScreen from "./lgScreen";
import NavSmScreen from "./smScreen";

const NavBar = () => {
  const screenSize = useContext(ScreenSizeContext);
  return (
    <div className="flex justify-between">
      <div>logo</div>
      <div>{screenSize === "small" ? <NavSmScreen /> : <NavLgScreen />}</div>
    </div>
  );
};

export default NavBar;

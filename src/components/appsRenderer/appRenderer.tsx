import { useContext } from "react";
import { ScreenSizeContext } from "../../contextProviders/screenSizeContext";
import LgApps from "../layouts/lgLayout/card/lgApps";
import MdApps from "../layouts/mdLayout/card/mdApps";
import SmApps from "../layouts/smLayout/card/smApps";

const AppsRenderer = () => {
  const screenSize = useContext(ScreenSizeContext);

  let AppsLayout;

  switch (screenSize) {
    case "large":
      AppsLayout = <LgApps />;
      break;
    case "medium":
      AppsLayout = <MdApps />;
      break;
    case "small":
      AppsLayout = <SmApps />;
      break;
    default:
      AppsLayout = null; // Fallback layout
      break;
  }

  return AppsLayout;
};

export default AppsRenderer;

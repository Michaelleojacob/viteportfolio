import { useContext } from "react";
import { ScreenSizeContext } from "../../contextProviders/screenSizeContext";
import LargeScreenLayout from "./lgScreen";
import MediumScreenLayout from "./mdScreen";
import SmallScreenLayout from "./smScreen";

const LayoutRenderer = () => {
  const screenSize = useContext(ScreenSizeContext);

  let layoutComponent;

  switch (screenSize) {
    case "large":
      layoutComponent = <LargeScreenLayout />;
      break;
    case "medium":
      layoutComponent = <MediumScreenLayout />;
      break;
    case "small":
      layoutComponent = <SmallScreenLayout />;
      break;
    default:
      layoutComponent = null; // Fallback layout
      break;
  }

  return layoutComponent;
};

export default LayoutRenderer;

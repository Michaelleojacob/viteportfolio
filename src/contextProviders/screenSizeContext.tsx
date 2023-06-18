import { createContext, useState, useEffect } from "react";
import { ChildProp } from "../types";

export const ScreenSizeContext = createContext<string | null>(null);

export const ScreenSizeProvider = ({ children }: ChildProp) => {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScreenSize("small");
      } else if (width >= 600 && width < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    handleResize(); // Set initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

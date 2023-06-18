import { useContext } from "react";
import { ScreenSizeContext } from "../../contextProviders/screenSizeContext";

const TestScreenSize = () => {
  const screenSize = useContext(ScreenSizeContext);
  console.log(screenSize);

  return (
    <>
      <div>{screenSize}</div>
    </>
  );
};

export default TestScreenSize;

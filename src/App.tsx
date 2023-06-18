import ParticleAnimation from "./components/particles/particles";
import { BrowserRouter } from "react-router-dom";
import LayoutRenderer from "./components/layout/layoutRenderer";
import { ScreenSizeProvider } from "./contextProviders/screenSizeContext";
import "./App.css";

const App = () => {
  return (
    <div className="z-50">
      <BrowserRouter>
        <ScreenSizeProvider>
          <LayoutRenderer />
        </ScreenSizeProvider>
      </BrowserRouter>
      <div className="absolute top-0 left-0 w-full h-full z-[-10]">
        <ParticleAnimation />
      </div>
    </div>
  );
};

export default App;

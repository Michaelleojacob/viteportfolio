import ParticleAnimation from "./components/particles/particles";
import AppRouter from "./router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/nav/navbar";

const App = () => {
  return (
    <div className="relative z-50">
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
      <div className="absolute top-0 left-0 w-full h-full z-[-10]">
        <ParticleAnimation />
      </div>
    </div>
  );
};

export default App;

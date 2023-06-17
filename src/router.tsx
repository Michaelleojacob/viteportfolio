import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
} from "./components/testComponents/testComponents";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;

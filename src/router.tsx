import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
} from "./components/testComponents/testComponents";
import AppRenderer from "./components/apps/appRenderer";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apps" element={<AppRenderer />} />
    </Routes>
  );
};

export default AppRouter;

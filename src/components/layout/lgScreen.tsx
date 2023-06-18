import AppRouter from "../../router";
import StickyDrawer from "../nav/stickyDrawer";

const LargeScreenLayout = () => {
  return (
    <div className="flex">
      <StickyDrawer />
      <AppRouter />
    </div>
  );
};

export default LargeScreenLayout;

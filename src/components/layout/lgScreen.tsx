import AppRouter from "../../router";
import StickyDrawer from "../nav/stickyDrawer";

const LargeScreenLayout = () => {
  return (
    <div className="flex">
      <div className="w-64">
        <StickyDrawer />
      </div>
      <div className="flex-1 p-4">
        <AppRouter />
      </div>
    </div>
  );
};

export default LargeScreenLayout;

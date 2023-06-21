import AppRouter from "../../../router";
import StickyDrawer from "../lgLayout/nav/stickyDrawer";

const MediumScreenLayout = () => {
  return (
    <div className="flex">
      <div className="w-64">
        <StickyDrawer />
      </div>
      <div className="flex-1">
        <AppRouter />
      </div>
    </div>
  );
};

export default MediumScreenLayout;

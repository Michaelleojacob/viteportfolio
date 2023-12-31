import LgLogo from "../logo/lgLogo";
import NavLgScreen from "./lgScreen";
import LgCopyright from "../copyright/lgCopyright";

const StickyDrawer = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white border-r-2 border-borderColor">
      <div className="flex flex-col items-center justify-between h-full">
        <LgLogo />
        <NavLgScreen />
        <LgCopyright />
      </div>
    </div>
  );
};

export default StickyDrawer;

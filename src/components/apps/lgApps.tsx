import AppData from "../../data/appdata";
import LgAppCard from "./cards/largeAppCard";

const LgApps = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-auto">
      {AppData.map((app) => (
        <LgAppCard app={app} key={app.id} />
      ))}
    </div>
  );
};

export default LgApps;

import AppData from "../../data/appdata";
import LgAppCard from "./cards/largeAppCard";

const LgApps = () => {
  return (
    <div
      className="grid grid-cols-auto grid-rows-auto gap-4 p-4"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(325px, 1fr))",
        gridTemplateRows: "repeat(auto-fill, minmax(450px, 1fr))",
      }}
    >
      {AppData.map((app) => (
        <LgAppCard app={app} key={app.id} />
      ))}
    </div>
  );
};

export default LgApps;

import AppData from "../../../../data/appdata";
import SmScreenCard from "./card";

const SmApps = () => {
  return (
    <div className="flex flex-col gap-8">
      {AppData.map((app) => (
        <SmScreenCard app={app} key={app.id} />
      ))}
    </div>
  );
};

export default SmApps;

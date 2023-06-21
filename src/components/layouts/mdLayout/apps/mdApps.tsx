import AppData from "../../../../data/appdata";
import SmScreenCard from "../../smLayout/apps/card";
const MdApps = () => {
  return (
    <div>
      {AppData.map((app) => (
        <SmScreenCard app={app} key={app.id} />
      ))}
    </div>
  );
};

export default MdApps;

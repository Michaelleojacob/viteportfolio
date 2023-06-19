import { App } from "../../../types";
import IconLinks from "./iconLinks";
import AppIcons from "./icons";

const LgAppCard: React.FC<{ app: App }> = ({ app }) => {
  return (
    <div>
      <img
        src={`images/${app.imgurl}.jpg`}
        alt={app.alt}
        height={300}
        width={300}
      />
      {/* <a href={app.demo}>{app.title}</a>
      <div className="flex">
        <IconLinks linkurl={app.repo} icontype="github" />
        <IconLinks linkurl={app.demo} icontype="external" />
      </div>
      <div className="flex">
        <AppIcons icons={app.icons} />
      </div> */}
    </div>
  );
};

export default LgAppCard;

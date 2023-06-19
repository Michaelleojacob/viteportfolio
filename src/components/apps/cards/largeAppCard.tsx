import { App } from "../../../types";
import IconLinks from "./iconLinks";
import AppIcons from "./icons";

const LgAppCard: React.FC<{ app: App }> = ({ app }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <a href={app.demo} target="blank">
        <img
          className="hover:opacity-70"
          src={`images/${app.imgurl}.jpg`}
          alt={app.alt}
          height={300}
          width={300}
        />
      </a>
      <a href={app.demo} className="text-3xl">
        {app.title}
      </a>
      <div className="flex gap-2 flex-wrap">
        <IconLinks linkurl={app.repo} icontype="github" textSize="text-2xl" />
        <IconLinks linkurl={app.demo} icontype="external" textSize="text-2xl" />
      </div>
      <div className="flex">
        <AppIcons icons={app.icons} />
      </div>
    </div>
  );
};

export default LgAppCard;
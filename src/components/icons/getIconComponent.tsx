import {
  SiReact,
  SiReactrouter,
  SiFirebase,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiWebpack,
  SiNpm,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiJest,
} from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";

const GetIconComponent = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "react":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiReact className="text-react" />
          </div>
        </Tooltip>
      );
    case "firebase":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiFirebase className="text-firebase" />
          </div>
        </Tooltip>
      );
    case "router":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiReactrouter className="text-router" />
          </div>
        </Tooltip>
      );
    case "redux":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiRedux className="text-redux" />
          </div>
        </Tooltip>
      );
    case "javascript":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiJavascript className="text-javascript" />
          </div>
        </Tooltip>
      );
    case "html":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiHtml5 className="text-html5" />
          </div>
        </Tooltip>
      );
    case "css":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiCss3 className="text-css3" />
          </div>
        </Tooltip>
      );
    case "webpack":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiWebpack className="text-webpack" />
          </div>
        </Tooltip>
      );
    case "npm":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiNpm className="text-npm" />
          </div>
        </Tooltip>
      );
    case "node":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiNodedotjs className="text-node" />
          </div>
        </Tooltip>
      );
    case "typescript":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiTypescript className="text-typescript" />
          </div>
        </Tooltip>
      );
    case "nextjs":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiNextdotjs className="text-nextjs" />
          </div>
        </Tooltip>
      );
    case "postgressql":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiPostgresql className="text-postgressql" />
          </div>
        </Tooltip>
      );
    case "mongodb":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiMongodb className="text-mongodb" />
          </div>
        </Tooltip>
      );
    case "jest":
      return (
        <Tooltip title={<div className="text-xl">{icon}</div>}>
          <div>
            <SiJest className="text-jest" />
          </div>
        </Tooltip>
      );
    default:
      return null;
  }
};

export default GetIconComponent;

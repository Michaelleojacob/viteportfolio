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
        <Tooltip title="react">
          <div>
            <SiReact className="text-react" />
          </div>
        </Tooltip>
      );
    case "firebase":
      return (
        <Tooltip title={icon}>
          <div>
            <SiFirebase className="text-firebase" />
          </div>
        </Tooltip>
      );
    case "router":
      return (
        <Tooltip title={icon}>
          <div>
            <SiReactrouter className="text-router" />
          </div>
        </Tooltip>
      );
    case "redux":
      return (
        <Tooltip title={icon}>
          <div>
            <SiRedux className="text-redux" />
          </div>
        </Tooltip>
      );
    case "javascript":
      return (
        <Tooltip title={icon}>
          <div>
            <SiJavascript className="text-javascript" />
          </div>
        </Tooltip>
      );
    case "html":
      return (
        <Tooltip title={icon}>
          <div>
            <SiHtml5 className="text-html5" />
          </div>
        </Tooltip>
      );
    case "css":
      return (
        <Tooltip title={icon}>
          <div>
            <SiCss3 className="text-css3" />
          </div>
        </Tooltip>
      );
    case "webpack":
      return (
        <Tooltip title={icon}>
          <div>
            <SiWebpack className="text-webpack" />
          </div>
        </Tooltip>
      );
    case "npm":
      return (
        <Tooltip title={icon}>
          <div>
            <SiNpm className="text-npm" />
          </div>
        </Tooltip>
      );
    case "node":
      return (
        <Tooltip title={icon}>
          <div>
            <SiNodedotjs className="text-node" />
          </div>
        </Tooltip>
      );
    case "typescript":
      return (
        <Tooltip title={icon}>
          <div>
            <SiTypescript className="text-typescript" />
          </div>
        </Tooltip>
      );
    case "nextjs":
      return (
        <Tooltip title={icon}>
          <div>
            <SiNextdotjs className="text-nextjs" />
          </div>
        </Tooltip>
      );
    case "postgressql":
      return (
        <Tooltip title={icon}>
          <div>
            <SiPostgresql className="text-postgressql" />
          </div>
        </Tooltip>
      );
    case "mongodb":
      return (
        <Tooltip title={icon}>
          <div>
            <SiMongodb className="text-mongodb" />
          </div>
        </Tooltip>
      );
    case "jest":
      return (
        <Tooltip title={icon}>
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

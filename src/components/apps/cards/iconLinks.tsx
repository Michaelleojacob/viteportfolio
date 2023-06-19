import { FiGithub, FiExternalLink } from "react-icons/fi";
import { IconLinkTypes } from "../../../types";

const IconLinks = ({ linkurl, icontype }: IconLinkTypes) => {
  return (
    <a href={linkurl} target="blank">
      {icontype === "github" ? <FiGithub /> : <FiExternalLink />}
    </a>
  );
};

export default IconLinks;

import { IconLinkTypes } from "../../../types";
import { Button } from "@mui/material";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const IconLinks = ({ linkurl, icontype, textSize }: IconLinkTypes) => {
  return (
    <a href={linkurl} className="flex">
      <Button variant="contained">
        {icontype === "github" ? (
          <BsGithub className={textSize} />
        ) : (
          <BsLink45Deg className={textSize} />
        )}
      </Button>
    </a>
  );
};

export default IconLinks;

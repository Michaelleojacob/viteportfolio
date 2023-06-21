import { Box } from "@mui/material";
import { App } from "../../../../types";
import IconLinks from "../../../icons/iconLinks";
import AppIcons from "../../../icons/icons";

const SmScreenCard = ({ app }: { app: App }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <a href={app.demo} target="_blank">
        <img
          className="hover:opacity-70"
          src={`images/${app.imgurl}.jpg`}
          alt={app.alt}
          height={500}
          width={500}
        ></img>
      </a>
      <a href={app.demo} className="text-4xl">
        {app.title}
      </a>
      <div className="flex gap-2 flex-wrap">
        <IconLinks linkurl={app.repo} icontype="github" textSize="text-2xl" />
        <IconLinks linkurl={app.demo} icontype="external" textSize="text-2xl" />
      </div>
      <div className="flex">
        <AppIcons icons={app.icons} />
      </div>
    </Box>
  );
};

export default SmScreenCard;

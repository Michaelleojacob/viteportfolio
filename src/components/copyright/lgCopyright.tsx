import CopyrightIcon from "@mui/icons-material/Copyright";

const LgCopyright = () => {
  return (
    <div className="flex flex-col items-center">
      <div>michaelleojacob</div>
      <div className="flex">
        <span className="flex items-center">
          <CopyrightIcon sx={{ fontSize: "2rem" }} />
          2024
        </span>
      </div>
    </div>
  );
};

export default LgCopyright;

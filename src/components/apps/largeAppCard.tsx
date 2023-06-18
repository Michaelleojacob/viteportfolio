import { AppCardProps } from "../../types";

const LgAppCard: React.FC<AppCardProps> = ({
  title,
  imgurl,
  repo,
  demo,
  icons,
}) => {
  console.log(icons);
  return (
    <div>
      <div>{title}</div>
      <div>{imgurl}</div>
      <div>{repo}</div>
      <div>{demo}</div>
    </div>
  );
};

export default LgAppCard;

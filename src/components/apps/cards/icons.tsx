import GetIconComponent from "./getIconComponent";

const AppIcons = ({ icons }: { icons: string[] }) => {
  return (
    <>
      {icons.map((icon, index) => (
        <div key={icon + index} className="flex">
          <GetIconComponent icon={icon} />
        </div>
      ))}
    </>
  );
};

export default AppIcons;

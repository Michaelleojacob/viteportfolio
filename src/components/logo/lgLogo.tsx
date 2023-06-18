import { NavLink } from "react-router-dom";

const LgLogo = () => {
  return (
    <div className="border-b-2 border-borderColor w-full flex justify-center p-4">
      <NavLink to="/">
        <img
          className="rounded-full border-8 border-solid border-borderColor"
          src="/images/brand-image.jpg"
          alt="brand image"
          height={200}
          width={200}
        />
      </NavLink>
    </div>
  );
};

export default LgLogo;

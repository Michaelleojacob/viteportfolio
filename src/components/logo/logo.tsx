import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <img
          src="/images/brand-image.jpg"
          alt="brand image"
          className="rounded-full border-8 border-solid border-borderColor max-w-full h-auto"
          height={100}
          width={100}
        />
      </NavLink>
    </>
  );
};

export default Logo;

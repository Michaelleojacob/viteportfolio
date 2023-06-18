import TextDump from "./textDump";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <TextDump amount={200} />
    </>
  );
};
const About = () => {
  return (
    <>
      <div>About</div>
    </>
  );
};
const Contact = () => {
  return (
    <>
      <div>Contact</div>
    </>
  );
};

export { Home, About, Contact };

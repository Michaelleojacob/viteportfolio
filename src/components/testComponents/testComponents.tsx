import TextDump from "./textDump";

const Home = () => {
  return (
    <>
      <div className="flex-1 pl-64">
        <TextDump amount={200} />
      </div>
    </>
  );
};
const About = () => {
  return (
    <>
      <div className="flex-1 pl-64">About</div>
    </>
  );
};
const Contact = () => {
  return (
    <>
      <div className="flex-1 pl-64">Contact</div>
    </>
  );
};

export { Home, About, Contact };

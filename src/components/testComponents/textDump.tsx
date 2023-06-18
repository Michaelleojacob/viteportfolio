const TextDump = ({ amount }: { amount: number }) => {
  return (
    <>
      {Array.from({ length: amount }).map((_, index) => (
        <p key={index}>'jibberish'</p>
      ))}
    </>
  );
};

export default TextDump;

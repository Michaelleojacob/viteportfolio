const TextDump = ({ amount }: { amount: number }) => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: amount }).map((_, index) => (
        <p key={index}>'jibberish'</p>
      ))}
    </div>
  );
};

export default TextDump;

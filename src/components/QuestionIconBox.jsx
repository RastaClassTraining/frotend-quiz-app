const QuestionIconBox = ({ icon, backgroundCode, title }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundCode,
      }}
      className="rounded-xl h-14 w-14 flex items-center justify-center text-center p-2"
    >
      <img className="w-full h-full object-contain" src={icon} alt={title} />
    </div>
  );
};

export default QuestionIconBox;

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const widthPercent = ((currentQuestion / totalQuestions) * 100).toFixed(0);

  return (
    <div className="bg-white rounded-full w-full p-1">
      <span
        className="flex h-4 bg-appPurple rounded-full"
        style={{ width: `${widthPercent}%`, transition: "width .5s" }}
      ></span>
    </div>
  );
};

export default ProgressBar;

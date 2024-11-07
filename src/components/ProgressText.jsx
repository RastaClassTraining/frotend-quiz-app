const ProgressText = ({ currentQuestion, totalQuestions }) => {
  return (
    <h5 className="text-sm md:text-xl italic">
      Question {currentQuestion} of {totalQuestions}
    </h5>
  );
};

export default ProgressText;

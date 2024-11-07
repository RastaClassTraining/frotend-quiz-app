const QuestionOptionItem = ({
  index,
  optionText,
  correctOption,
  selectedOption,
  isSubmitted,
  setSelectedOption,
}) => {
  const showSelectedStyle = optionText === selectedOption && !isSubmitted;

  const showCorrectAnswerStyle = isSubmitted && optionText === correctOption;

  const showWrongAnswerStyle =
    isSubmitted &&
    optionText !== correctOption &&
    optionText === selectedOption;
  const update = () => {
    setSelectedOption(optionText);
  };
  const iconUrl = showCorrectAnswerStyle
    ? "/images/icon-correct.svg"
    : showWrongAnswerStyle
    ? "/images/icon-incorrect.svg"
    : "";
  return (
    <button
      onClick={update}
      className={`flex items-center bg-white dark:bg-navy p-3 rounded-xl md:rounded-3xl lg:p-4 gap-4 border-[3px] border-transparent ${
        showSelectedStyle ? "border-appPurple" : ""
      } ${showCorrectAnswerStyle ? "border-appGreen" : ""} ${
        showWrongAnswerStyle ? "border-appRed" : ""
      }`}
      disabled={isSubmitted}
    >
      <p
        className={`h-10 w-10 flex items-center justify-center md:h-14 md:w-14 rounded-xl p-1 bg-lightGrey text-greyNavy dark:text-greyNavy text-lg md:text-2xl ${
          showSelectedStyle ? "!bg-appPurple !text-white" : ""
        } ${showCorrectAnswerStyle ? "bg-appGreen !text-white" : ""} ${
          showWrongAnswerStyle ? "bg-appRed !text-white" : ""
        }`}
      >
        {String.fromCharCode(65 + index)}
      </p>
      <p className="flex-1 text-left">{optionText}</p>
      {iconUrl && <img src={iconUrl} alt="Icon" />}
    </button>
  );
};

export default QuestionOptionItem;

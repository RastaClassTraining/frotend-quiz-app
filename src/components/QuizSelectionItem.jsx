import { Link } from "react-router-dom";
import QuestionIconBox from "./QuestionIconBox";

const QuizSelectionItem = ({ title, icon, iconBackground }) => {
  return (
    <Link
      to={`/quiz/${title}`}
      className="bg-white dark:bg-navy flex items-center gap-5 shadow-xl rounded-3xl p-3 lg:p-5"
    >
      <QuestionIconBox
        title={title}
        icon={icon}
        backgroundCode={iconBackground}
      />
      <p className="flex-1 font-bold lg:text-2xl">{title}</p>
    </Link>
  );
};

export default QuizSelectionItem;

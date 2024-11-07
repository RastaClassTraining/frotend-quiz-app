import { Navigate, useNavigate, useParams } from "react-router-dom";
import Container from "../layout/Container";
import ProgressText from "../components/ProgressText";
import QuestionBox from "../components/QuestionBox";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import { useQuestions } from "../hooks/useQuestions";
import Button from "../components/Button";

const QuizPage = () => {
  const { quizType } = useParams();
  const data = useQuestions(quizType);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [buttonText, setButtonText] = useState("Submit Answer");

  const questionDataIndex = currentQuestion - 1;
  const questionData = data?.questions?.[questionDataIndex];
  const totalQuestions = data?.questions?.length || 10;

  console.log("Question", questionData);

  const handleButtonClick = () => {
    if (totalQuestions === currentQuestion) {
      const result = {
        total: totalQuestions,
        correct: Math.trunc(Math.random() * totalQuestions),
      };

      const jsonData = JSON.stringify(result);
      const encodedData = btoa(jsonData);

      navigate(`/result/${quizType}?d=${encodedData}`);
    }
    if (buttonText === "Submit Answer") {
      setButtonText("Next Question");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return data ? (
    <Container className="gap-10">
      <section className="flex-1 flex flex-col gap-5 lg:gap-44">
        <div className="flex flex-col gap-7">
          <ProgressText
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />

          <QuestionBox question={questionData?.question} />
        </div>

        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
        />
      </section>
      <section className="flex-1 flex flex-col gap-5">
        <div>List</div>
        <Button onClick={handleButtonClick}>{buttonText}</Button>
      </section>
    </Container>
  ) : (
    <Navigate to={"/"} />
  );
};

export default QuizPage;

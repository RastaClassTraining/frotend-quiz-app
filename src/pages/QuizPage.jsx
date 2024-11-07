import { Navigate, useNavigate, useParams } from "react-router-dom";
import Container from "../layout/Container";
import ProgressText from "../components/ProgressText";
import QuestionBox from "../components/QuestionBox";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import { useQuestions } from "../hooks/useQuestions";
import Button from "../components/Button";
import QuestionOptionItem from "../components/QuestionOptionItem";

const QuizPage = () => {
  const { quizType } = useParams();
  const data = useQuestions(quizType);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [buttonText, setButtonText] = useState("Submit Answer");
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const questionDataIndex = currentQuestion - 1;
  const questionData = data?.questions?.[questionDataIndex];
  const totalQuestions = data?.questions?.length || 10;

  const isSubmitted = buttonText === "Next Question";
  console.log("Question", questionData);

  const handleButtonClick = () => {
    if (!selectedOption) {
      setError(true);
      return;
    }

    setError(false);

    if (totalQuestions === currentQuestion) {
      const result = {
        total: totalQuestions,
        correct: correctCount,
      };

      const jsonData = JSON.stringify(result);
      const encodedData = btoa(jsonData);

      navigate(`/result/${quizType}?d=${encodedData}`);
    }

    if (buttonText === "Submit Answer") {
      setButtonText("Next Question");
    } else {
      const correctAnswer = questionData?.answer;
      if (selectedOption === correctAnswer) {
        setCorrectCount((prev) => prev + 1);
      }

      setSelectedOption("");
      setCurrentQuestion(currentQuestion + 1);
      setButtonText("Submit Answer");
    }
  };

  const updateSelected = (selected) => {
    if (selected) {
      setError(false);
    }
    setSelectedOption(selected);
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
        <div className="flex flex-col gap-5">
          {questionData?.options?.map((option, i) => {
            return (
              <QuestionOptionItem
                index={i}
                correctOption={questionData?.answer}
                key={option}
                selectedOption={selectedOption}
                optionText={option}
                isSubmitted={isSubmitted}
                setSelectedOption={updateSelected}
              />
            );
          })}
        </div>
        <Button onClick={handleButtonClick}>{buttonText}</Button>
        {error && (
          <div className="flex items-center gap-4 justify-center">
            <img src="/images/icon-error.svg" alt="Error" />
            <p className="text-appRed">Please select an answer</p>
          </div>
        )}
      </section>
    </Container>
  ) : (
    <Navigate to={"/"} />
  );
};

export default QuizPage;

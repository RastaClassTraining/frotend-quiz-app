import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { useQuestions } from "../hooks/useQuestions";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Container from "../layout/Container";
import Button from "../components/Button";
import QuestionIconBox from "../components/QuestionIconBox";

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const { quizType } = useParams();
  const questionData = useQuestions(quizType);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const setup = () => {
      try {
        const dataString = searchParams.get("d");
        const decodedString = atob(dataString);
        const parsedData = JSON.parse(decodedString);
        setData(parsedData);
        console.log(parsedData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    setup();
  }, [searchParams]);

  return loading ? (
    <Loader />
  ) : !data ? (
    <Navigate to="/" />
  ) : (
    <Container>
      <section className="flex-1">
        <h1 className="flex flex-col gap-1 text-3xl md:text-5xl lg:text-6xl text-darkNavy dark:text-white">
          <span>Quiz completed</span>
          <span className="font-bold">You scored... </span>
        </h1>
      </section>
      <section className="flex-1 flex flex-col gap-3 md:gap-8">
        <div className="flex flex-col gap-4 md:gap-8 p-8 md:p-12 text-center justify-center items-center bg-white dark:bg-navy shadow-md rounded-xl">
          <div className="flex items-center gap-2">
            <QuestionIconBox
              icon={questionData?.icon}
              title={questionData?.title}
              backgroundCode={questionData?.iconBackground}
            />
            <h3 className="text-lg md:text-2xl font-semibold">{quizType}</h3>
          </div>

          <div>
            <h1 className="text-[5.5rem] md:text-[9rem] leading-[1] text-semibold text-darkNavy dark:text-white">
              {data?.correct || 0}
            </h1>
            <p className="">out of {data?.total || "--"}</p>
          </div>
        </div>
        <Button to="/">Play Again</Button>
      </section>
    </Container>
  );
};

export default ResultPage;

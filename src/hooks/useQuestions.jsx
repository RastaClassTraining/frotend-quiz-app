import quizData from "../assets/data.json";

export const useQuestions = (question) => {
  const quizzes = quizData?.quizzes || [];
  if (question) {
    const data = quizzes.find((quiz) => quiz.title === question);
    return data;
  }

  return quizzes;
};

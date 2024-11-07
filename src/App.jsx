import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import AppLayout from "./layout/AppLayout";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "quiz/:quizType",
        element: <QuizPage />,
      },
      {
        path: "result/:quizType",
        element: <ResultPage />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

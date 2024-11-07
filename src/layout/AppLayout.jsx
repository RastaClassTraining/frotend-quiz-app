import { Navigate, Outlet, useParams } from "react-router-dom";
import ScreenModeToggle from "../components/ScreenModeToggle";
import QuestionIconBox from "../components/QuestionIconBox";
import { useQuestions } from "../hooks/useQuestions";

const AppLayout = () => {
  const { quizType } = useParams();
  const data = useQuestions(quizType);

  return !data ? (
    <Navigate to={"/"} />
  ) : (
    <div className="min-h-screen">
      <div className="hidden lg:block">
        <img
          className="dark:hidden absolute inset-0 z-[1]"
          src="/images/pattern-background-desktop-light.svg"
          alt="pattern-1"
        />
        <img
          className="hidden dark:block absolute inset-0 z-[1]"
          src="/images/pattern-background-desktop-dark.svg"
          alt="pattern-1"
        />
      </div>
      <div className="lg:hidden">
        <img
          className="dark:hidden absolute inset-0 z-[1]"
          src="/images/pattern-background-mobile-light.svg"
          alt="pattern-1"
        />
        <img
          className="hidden dark:block absolute inset-0 z-[1]"
          src="/images/pattern-background-mobile-dark.svg"
          alt="pattern-1"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-10 lg:pt-20 flex flex-col gap-14 lg:gap-24">
        <header
          className={`flex items-center ${
            quizType ? "justify-between" : "justify-end"
          }`}
        >
          {quizType && (
            <div className="flex items-center gap-2">
              <QuestionIconBox
                icon={data?.icon}
                title={data?.title}
                backgroundCode={data?.iconBackground}
              />
              <h3 className="text-lg md:text-2xl font-semibold">{quizType}</h3>
            </div>
          )}
          <div className="relative z-[2]">
            <ScreenModeToggle />
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

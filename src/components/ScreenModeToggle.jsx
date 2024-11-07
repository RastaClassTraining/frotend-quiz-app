import { useState } from "react";

const ScreenModeToggle = () => {
  const [state, setState] = useState("light");

  const toggle = () => {
    if (state === "light") {
      document.body.classList.add("dark");
      setState("dark");
    } else {
      document.body.classList.remove("dark");
      setState("light");
    }
  };
  return (
    <div className="flex items-center gap-3">
      <div>
        <img
          className="hidden dark:block"
          src="/images/icon-sun-light.svg"
          alt="Light"
        />
        <img
          className="dark:hidden"
          src="/images/icon-sun-dark.svg"
          alt="Light"
        />
      </div>

      <button
        onClick={toggle}
        className={`w-12 h-7 bg-appPurple rounded-full px-1 flex items-center ${
          state === "light" ? "" : "justify-end"
        }`}
      >
        <span className="h-5 w-5 rounded-full bg-white block"></span>
      </button>

      <div>
        <img
          className="hidden dark:block"
          src="/images/icon-moon-light.svg"
          alt="Light"
        />
        <img
          className="dark:hidden"
          src="/images/icon-moon-dark.svg"
          alt="Light"
        />
      </div>
    </div>
  );
};

export default ScreenModeToggle;

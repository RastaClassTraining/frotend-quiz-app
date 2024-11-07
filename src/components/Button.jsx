import { Link } from "react-router-dom";

const Button = ({ children, onClick, to, className = "" }) => {
  const _classes = `text-center rounded-xl md:rounded-3xl text-white bg-appPurple text-lg md:text-2xl  p-3 py-2 md:p-5 md:py-4 ${className}`;
  return to ? (
    <Link className={_classes} to={to}>
      {children}
    </Link>
  ) : (
    <button className={_classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

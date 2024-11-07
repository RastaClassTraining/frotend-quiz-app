const Container = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-5 lg:gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

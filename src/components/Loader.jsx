const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-[1] bg-white/55 dark:bg-black/55 flex items-center justify-center gap-2">
      <span className="h-6 w-6 block bg-gradient-to-tr from-appPurple to-appGreen rounded-full animate-spin"></span>
      <p className="text-xl animate-pulse">{text}</p>
    </div>
  );
};

export default Loader;

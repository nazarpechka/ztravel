const Button = ({ label, type, onClick, className, children }) => {
  return (
    <button
      className={
        "bg-secondary bg-opacity-90 py-2 px-10 rounded-lg hover:bg-opacity-100 hover:shadow-inner hover:scale-105 transition duration-150 " +
        className
      }
      type={type}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="text-lg text-white font-bold">{label}</span>
        {children}
      </div>
    </button>
  );
};

export default Button;

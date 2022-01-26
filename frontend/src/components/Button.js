const Button = ({ label, type, onClick }) => {
  return (
    <button
      className="bg-secondary bg-opacity-90 py-2 px-10 rounded-lg hover:bg-opacity-100 hover:shadow-inner hover:scale-105 transition duration-150"
      type={type}
      onClick={onClick}
    >
      <span className="text-lg text-white font-bold">{label}</span>
    </button>
  );
};

export default Button;

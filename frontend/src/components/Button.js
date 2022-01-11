const Button = ({ label, type, onClick }) => {
  return (
    <button
      className="bg-secondary py-2 px-20 rounded-lg hover:shadow-inner hover:scale-105 transition duration-150"
      type={type}
      onClick={onClick}
    >
      <span className="text-lg text-white font-bold">{label}</span>
    </button>
  );
};

export default Button;

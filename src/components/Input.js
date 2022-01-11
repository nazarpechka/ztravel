const Input = ({ label, name, type, value, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block my-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        className="w-full focus:border-secondary focus:ring-secondary border border-gray-300 rounded-md"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;

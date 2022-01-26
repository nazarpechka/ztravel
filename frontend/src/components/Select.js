const Select = ({ label, name, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block my-2">
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        className="w-full focus:border-secondary focus:ring-secondary border border-gray-300 rounded-md"
        onChange={onChange}
        required
      >
        {options.map(({ key, val }) => (
          <option value={key} key={key ? key : "dummy"}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

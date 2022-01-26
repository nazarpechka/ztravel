const SearchSelect = ({
  icon,
  label,
  name,
  options,
  value,
  first,
  last,
  onChange,
}) => {
  return (
    <div
      className={`border-gray-500 border-l border-y py-2 px-4 flex items-center gap-2 ${
        first ? "rounded-l-lg" : ""
      } ${last ? "rounded-r-lg" : ""}`}
    >
      {icon}
      <div>
        <label htmlFor={name} className="block text-gray-300 font-light pl-3">
          {label}
        </label>

        <select
          name={name}
          id={name}
          className="bg-transparent border-none focus:border-secondary focus:ring-secondary rounded-lg"
          value={value}
          onChange={onChange}
        >
          {options.map(({ name, label }) => (
            <option value={name} key={name ? name : "dummy"}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchSelect;

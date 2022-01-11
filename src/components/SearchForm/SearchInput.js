const SearchInput = ({
  icon,
  label,
  name,
  type,
  value,
  first,
  last,
  onChange,
}) => {
  return (
    <div
      className={`border-gray-500 border-l border-y py-2 px-4 flex items-center gap-2 ${
        first ? "rounded-l-lg" : ""
      } ${last ? "rounded-r-lg border-r" : ""}`}
    >
      {icon}
      <div>
        <label htmlFor={name} className="block text-gray-300 font-light pl-3">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          className="bg-transparent border-none focus:border-secondary focus:ring-secondary rounded-lg"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchInput;

const Select = ({ id, label, onSelect, children }) => {
  return (
    <div className="flex flex-col p-5 items-start">
      <label
        className="mb-[3px] font-bold text-cyan-800 text-[12px]"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="form-select min-w-[250px]"
        id={id}
        name={id}
        onChange={onSelect}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;

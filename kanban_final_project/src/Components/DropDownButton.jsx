import React from "react";

const DropDownButton = ({initialValue, options,onChange ,className }) => {
  return (
    <div className="flex flex-col items-end gap-y-1">
      <select
        className={className}
        value={initialValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((options) => (
          <option key={options.id} value={options.id}>
            {options.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownButton;

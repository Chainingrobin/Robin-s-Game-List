import React from 'react';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({label,value,onChange,options}) => {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">{label}</label>
      <select
        id={label}
        className="form-select w-auto"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelector;

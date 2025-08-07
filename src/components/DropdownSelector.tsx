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
  sortDirection?: 'asc' | 'desc';
  onToggleDirection?: () => void;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  label,
  value,
  onChange,
  options,
  sortDirection,
  onToggleDirection
}) => {
  const arrow = sortDirection === 'asc' ? '↑' : '↓';

  return (
    <div className="dropdown-with-arrow">
      <h5><label htmlFor={label} className="form-label">{label}</label></h5>
      <div className="d-flex align-items-center">
        <select
          id={label}
          className="form-select custom-dropdown"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Only show arrow if sorting is allowed */}
        {sortDirection && onToggleDirection && (
          <button
            type="button"
            className="btn btn-sm ms-2 toggle-arrow-btn"
            onClick={onToggleDirection}
          >
            {arrow}
          </button>
        )}
      </div>
    </div>
  );
};

export default DropdownSelector;

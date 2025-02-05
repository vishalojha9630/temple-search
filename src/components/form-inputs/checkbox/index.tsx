import React from 'react';

interface CheckBoxProps {
  name?: string;
  values?: string[] | undefined;
  options: { value: string; label: string }[];
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  className?: string;
  label?: string;
  error?: string;
  displayInline?: boolean;
  disabled?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  values,
  options,
  checked,
  onChange,
  className = '',
  label,
  displayInline,
  error,
  disabled
}: CheckBoxProps) => {
  return (
    <div className={`form-group mb-2 ${className}`}>
      {label && <label className="form-label mb-1 d-block">{label}</label>}

      <div className='d-flex flex-wrap gap-3'>
        {options.map((option, i) => (
          <div className={`form-check`} key={i}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              onChange={onChange}
              checked={checked ? checked : values?.includes(option.value)}
              className="form-check-input"
              id={`${name}-${i}-${option.value}`}
              disabled={disabled ? disabled : false}
            />
            <label htmlFor={`${name}-${i}-${option.value}`} className="form-check-label">
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default CheckBox;

import React, { ChangeEvent, FocusEvent } from 'react'


interface TimerFieldProps {
  name?: string;
  type?: 'text' | 'time' | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  value?: string | string[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string;
  readOnly?: boolean;
  autoComplete?: string
}
const TimerField: React.FC<TimerFieldProps> = ({
  name,
  type = 'time',
  onChange,
  onBlur,
  value,
  label,
  placeholder = 'Enter here',
  readOnly = false,
  className = '',
  error
}: TimerFieldProps) => {
  return (
    <div className={`form-group mb-3 ${className}`}>
      {label && (
        <label className="label-form mb-1">
          {label}
        </label>
      )}

      <input
        type={type || 'time'}
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-control ${error && 'invalid'} `}
      />

    </div>
  )
}

export default TimerField
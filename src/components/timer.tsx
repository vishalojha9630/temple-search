import React, { ChangeEvent } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface TimerFieldProps {
  selected?: Date | null;
  onChange?: (date: Date | null) => void;

  className?: string;
  placeholderText?: string;
  label?: string;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
  timeIntervals?: number;
}
const TimerField: React.FC<TimerFieldProps> = ({
  label,
  selected,
  onChange,
  showTimeSelect = true,
  showTimeSelectOnly = true,
  timeIntervals = 15,
  className = '',
  placeholderText='Select a time'
}) => {
  return (
    <div className={`form-group mb-3 ${className}`}>
      {label && (
        <label className="label-form mb-1">
          {label}
        </label>
      )}

      <DatePicker
        selected={selected}
        onChange={onChange}
        showTimeSelect={showTimeSelect}
        showTimeSelectOnly={showTimeSelectOnly}
        timeIntervals={timeIntervals}
        dateFormat="h:mm aa"
        className={`form-control `}
        showTimeCaption={false}
        placeholderText={placeholderText}
      />
    </div>
  )
}

export default TimerField
import React, { ChangeEvent, FocusEvent } from 'react'

interface InputFieldProps {
	name?: string;
	type?: 'text' | 'password' | 'email' | 'number' | undefined | 'time' | 'date';
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

const InputField: React.FC<InputFieldProps> = ({
	name,
	type = 'text',
	onChange,
	onBlur,
	value,
	label,
	placeholder = 'Enter here',
	required = false,
	readOnly = false,
	className = '',
	error
}: InputFieldProps) => {

	return (
		<div className={`form-group mb-3 ${className}`}>
			{label && (
				<label className="label-form mb-1">
					{label} {required && <span className="text-danger">*</span>}
				</label>
			)}

			<input
				type={type || 'text'}
				autoComplete="off"
				name={name}
				placeholder={placeholder}
				readOnly={readOnly}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				className={`form-control ${error && 'invalid'} `}
			/>

			{error && <span className="invalid-feedback text-danger d-block mt-1">{error}</span>}
		</div>
	)
}

export default InputField

import React, { ChangeEvent, FocusEvent } from 'react';

interface TextAreaProps {
	name?: string;
	value?: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	rows?: number;
	className?: string;
	error?: string;
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
	name,
	value,
	label,
	placeholder,
	required = false,
	rows,
	className = '',
	error,
	onChange,
	onBlur
}: TextAreaProps) => {
	const inputId = name || ''

	return (
		<div className={`form-group mb-3 ${className}`}>
			{label && (
				<label htmlFor={inputId} className="label-form mb-1">
					{label} {required && <span className="text-danger">*</span>}
				</label>
			)}

			<textarea
				id={inputId}
				className={`form-control ${error && 'invalid'}`}
				name={name}
				placeholder={placeholder}
				value={value}
				rows={rows}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <span className="invalid-feedback text-danger d-block mt-1">{error}</span>}
		</div>
	);
};

export default TextArea;

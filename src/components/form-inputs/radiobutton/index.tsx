import React from 'react';

interface RadioButtonProps {
	name?: string;
	value?: string[] | undefined | string;
	checked?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	options: { value: string; label: string }[];
	required?: boolean;
	className?: string;
	label?: string;
	error?: string;
	displayInline?: boolean;
	disabled?: boolean
}

const RadioButton: React.FC<RadioButtonProps> = ({
	name,
	value,
	checked,
	onChange,
	options,
	required,
	className = '',
	label,
	error,
	displayInline,
	disabled
}: RadioButtonProps) => {
	return (
		<div className={`form-group mb-3 ${className}`}>
			{label && (
				<label className={`label-form mb-1 d-block ${displayInline ? 'form-check-inline' : ''}`}>
					{label} {required && <span className="text-danger">*</span>}
				</label>
			)}

			{options &&
				options.map((option: { value: string; label: string }, i: number) => (
					<div className={`form-check ${displayInline ? 'form-check-inline' : ''}`} key={i}>
						<input
							type="radio"
							name={name}
							onChange={onChange}
							value={option.value}
							checked={checked ? checked : value?.includes(option.value)}
							className={'form-check-input'}
							id={`${name}-${i}-${option.value}`}
							disabled={disabled ? disabled : false}
						/>
						<label htmlFor={`${name}-${i}-${option.value}`} className="form-check-label">
							{option.label}
						</label>
					</div>
				))}

			{error && <span className="invalid-feedback text-danger d-block mt-1">{error}</span>}
		</div>
	);
};

export default RadioButton;
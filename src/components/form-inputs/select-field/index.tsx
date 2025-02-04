import React from 'react'
import Select from 'react-select'
const SelectField = ({ name, value, onChange, disabled, closeMenuOnSelect, components,
	options, getOptionLabel, getOptionValue, defaultValue, label, required, placeholder = 'Choose an option', error, className = '', ...props }: any) => {
	const isSelected = () => {
		if (typeof value === 'object') { // yes
			const flag = Object.keys(value)[0] // key name of first index of an object

			if (options && options[0]?.options) {
				return (options.map((item: any) => item.options.find((item: { [key: string]: string | number }) => item[flag] === value[flag])))
			} else {
				return (options?.find((item: { [key: string]: string | number }) => item[flag] === value[flag]))
			}
		}

		return value
	}

	return (
		<div className={`form-group mb-3 ${className}`}>
			{label && <label className="form-label mb-1">{label} {required && <span className="text-danger">*</span>}</label>}
			<Select
				name={name}
				value={isSelected()}
				className="react-dropdown"
				isDisabled={disabled}
				classNamePrefix="react-select"
				options={options}
				defaultValue={defaultValue}
				onChange={onChange}
				getOptionLabel={getOptionLabel}
				getOptionValue={getOptionValue}
				placeholder={placeholder}
				closeMenuOnSelect={closeMenuOnSelect}
				components={components}
				{...props}
			/>
			{error && <span className="text-danger">{error}</span>}
		</div >
	)
}
export default SelectField
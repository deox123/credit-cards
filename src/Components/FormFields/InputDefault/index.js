import React from 'react';
import PropTypes from 'prop-types';

import INPUT_TYPES from './constants';

import { Label, LabelContent, Input, ErrorMessage } from './styles';

const InputDefault = React.forwardRef(
	(
		{
			label,
			onChange: handleChange,
			value,
			type,
			placeholder,
			disabled,
			maxLength,
			name,
			errorMessage,
		},
		ref,
	) => {
		return (
			<Label>
				{label && <LabelContent>{label}</LabelContent>}
				<Input
					name={name}
					value={value}
					onChange={handleChange}
					type={type}
					placeholder={placeholder}
					label={label}
					disabled={disabled}
					maxLength={maxLength}
					ref={ref}
				/>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</Label>
		);
	},
);

InputDefault.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	type: PropTypes.oneOf(INPUT_TYPES),
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	maxLength: PropTypes.number,
	name: PropTypes.string,
	errorMessage: PropTypes.string,
};

InputDefault.defaultProps = {
	onChange: () => {},
	label: '',
	value: '',
	type: 'text',
	placeholder: '',
	disabled: false,
	maxLength: null,
	name: '',
	errorMessage: '',
};

export default InputDefault;

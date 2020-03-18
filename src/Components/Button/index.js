import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const Button = React.forwardRef(({ onClick, isDisabled, children }, ref) => {
	const buildHandleEnterKeyPress = (callback) => (event) => {
		if (event.key === 'Enter') {
			callback(event);
		}
	};

	const handleClick = (event) => {
		if (isDisabled) {
			return;
		}
		onClick(event);
	};

	return (
		<Container
			onClick={handleClick}
			disabled={isDisabled}
			tabIndex="0"
			onKeyPress={buildHandleEnterKeyPress(handleClick)}
			ref={ref}
		>
			{children}
		</Container>
	);
});

Button.propTypes = {
	onClick: PropTypes.func,
	isDisabled: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

Button.defaultProps = {
	isDisabled: true,
	onClick: () => {},
};

export default Button;

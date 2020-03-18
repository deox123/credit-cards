import React from 'react';
import PropTypes from 'prop-types';

import StyledHeading from './styles';

function Heading({ children }) {
	return <StyledHeading>{children}</StyledHeading>;
}

Heading.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Heading;

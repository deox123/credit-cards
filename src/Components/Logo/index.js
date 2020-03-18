import React from 'react';
import PropTypes from 'prop-types';

import Master from '../../assets/master.png';
import Discover from '../../assets/discover.png';
import Visa from '../../assets/visa.png';

import { MASTER, VISA, DISCOVER } from './constants';

import { Placeholder, Image } from './styles';

const getLogo = (type) => {
	switch (type) {
		case MASTER:
			return Master;

		case VISA:
			return Visa;

		case DISCOVER:
			return Discover;

		default:
			return '';
	}
};

function Logo({ type }) {
	const cardLogo = getLogo(type);
	return cardLogo ? <Image src={cardLogo} isMaster={cardLogo === Master} /> : <Placeholder />;
}

Logo.propTypes = {
	type: PropTypes.string,
};

Logo.defaultProps = {
	type: '',
};

export default Logo;

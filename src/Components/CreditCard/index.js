import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';

import { Container, LogoContainer, Details, AddNew, NumberContainer, NumberPart } from './styles';

function CreditCard({
	numbers,
	name,
	date,
	onClick: handleClick,
	isNew,
	focusInputField,
	className,
	isViewMode,
}) {
	return (
		<Container
			className={className}
			onClick={handleClick}
			isNew={isNew}
			isViewMode={isViewMode}
		>
			{isNew ? (
				<AddNew />
			) : (
				<>
					<LogoContainer>
						{numbers[0] && <Logo type={numbers[0].value[0]} />}
					</LogoContainer>
					<NumberContainer>
						{numbers.map(({ key, value }) => (
							<NumberPart key={key} onClick={focusInputField(key)}>
								{value}
							</NumberPart>
						))}
					</NumberContainer>
					<Details>
						<span onClick={focusInputField('nameRef')}>{name}</span>
						{date && (
							<span onClick={focusInputField('date')}>
								{date.substr(0, 2)}/{date.substr(2)}
							</span>
						)}
					</Details>
				</>
			)}
		</Container>
	);
}

CreditCard.propTypes = {
	numbers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
	name: PropTypes.string,
	date: PropTypes.string,
	onClick: PropTypes.func,
	isNew: PropTypes.bool,
	focusInputField: PropTypes.func,
	className: PropTypes.string,
	isViewMode: PropTypes.bool,
};

CreditCard.defaultProps = {
	numbers: [],
	name: '',
	date: '',
	onClick: () => {},
	isNew: false,
	focusInputField: () => {},
	className: '',
	isViewMode: false,
};

export default CreditCard;

import { parse, isAfter, lastDayOfMonth } from 'date-fns';

export const generateStateSchema = ({
	name = '',
	cardNumber1 = '',
	cardNumber2 = '',
	cardNumber3 = '',
	cardNumber4 = '',
	date = '',
}) => {
	return {
		name: { value: name, error: '' },
		cardNumber1: { value: cardNumber1, error: '' },
		cardNumber2: { value: cardNumber2, error: '' },
		cardNumber3: { value: cardNumber3, error: '' },
		cardNumber4: { value: cardNumber4, error: '' },
		date: { value: date, error: '' },
	};
};

export const stateValidatorSchema = {
	name: {
		required: true,
		validator: {
			test: (value) => /^[a-zA-Z ]+$/.test(value),
			error: 'Invalid name format.',
		},
	},
	cardNumber1: {
		required: true,
		validator: {
			test: (value) => /(4|5|6)[0-9]{3}/.test(value),
			error: 'Wrong card number.',
		},
	},
	cardNumber2: {
		required: true,
		validator: {
			test: (value) => /[0-9]{4}/.test(value),
			error: 'Wrong card number.',
		},
	},
	cardNumber3: {
		required: true,
		validator: {
			test: (value) => /[0-9]{4}/.test(value),
			error: 'Wrong card number.',
		},
	},
	cardNumber4: {
		required: true,
		validator: {
			test: (value) => /[0-9]{4}/.test(value),
			error: 'Wrong card number.',
		},
	},
	date: {
		required: true,
		validator: {
			test: (value) => {
				const parsedDate = parse(value, 'MMyy', new Date());
				return isAfter(lastDayOfMonth(parsedDate), new Date());
			},
			error: 'Wrong date.',
		},
	},
};

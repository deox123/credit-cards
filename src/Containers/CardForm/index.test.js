import React from 'react';
import { mount, shallow } from 'enzyme';

import CardForm from './index';
import Input from '../../Components/FormFields/InputDefault';

jest.mock('react-router-dom', () => ({
	useHistory: () => ({
		push: jest.fn(),
	}),
}));

describe('CardForm', () => {
	it('Renders without crashing', () => {
		shallow(<CardForm />);
	});

	it('Should have 6 input fields', () => {
		const wrapper = mount(<CardForm />);
		expect(wrapper.find(Input)).toHaveLength(6);
	});

	it('Should have Save button', () => {
		const wrapper = mount(<CardForm />);
		expect(wrapper.find('[data-testid="submitButton"]')).toHaveLength(1);
	});

	it('Should have CreditCard', () => {
		const wrapper = mount(<CardForm />);
		expect(wrapper.find('CreditCard')).toHaveLength(1);
	});

	it('Should disable Save button on init', () => {
		const wrapper = mount(<CardForm />);
		expect(wrapper.find('[data-testid="submitButton"]').prop('isDisabled')).toBe(true);
	});

	// describe('Should allow Visa, Master and Dicover cards', () => {
	// 	const mockProps = {
	// 		name: 'Name',
	// 		date: '02/22',
	// 		numbers: [
	// 			{
	// 				key: 'cardNumber1',
	// 				value: '0000',
	// 			},
	// 			{
	// 				key: 'cardNumber2',
	// 				value: '0000',
	// 			},
	// 			{
	// 				key: 'cardNumber3',
	// 				value: '0000',
	// 			},
	// 			{
	// 				key: 'cardNumber4',
	// 				value: '0000',
	// 			},
	// 		],
	// 	};
	// 	const wrapper = mount(<CardForm {...mockProps} />);

	// 	it('Should accept initial props', () => {
	// 		const cardNumberInput = wrapper.find(Input).at(1);
	// 		cardNumberInput.prop('onChange')({ target: { name: 'cardNumber1', value: '4000' } });
	// 		// expect(cardNumberInput.prop('value')).toEqual('4000');
	// 		const saveButton = wrapper.find('[data-testid="submitButton"]');
	// 		expect(saveButton.prop('isDisabled')).toBe(false);
	// 	});

	// it('Should allow Visa cards', async () => {
	// 	const cardNumberInput = wrapper.find(Input).at(1);
	// 	cardNumberInput.props().onChange({ target: { name: 'cardNumber1', value: '4000' } });
	// 	wrapper.update();

	// 	const saveButton = wrapper.find('[data-testid="submitButton"]');

	// 	expect(saveButton.prop('isDisabled')).toBe(false);
	// });

	// it('Should allow Master cards', () => {
	// 	const cardNumberInput = wrapper.find(Input).at(1);
	// 	cardNumberInput.props().onChange({ target: { name: 'cardNumber1', value: '5000' } });
	// 	wrapper.update();

	// 	const saveButton = wrapper.find('[data-testid="submitButton"]');

	// 	expect(saveButton.prop('isDisabled')).toBe(false);
	// });

	// it('Should allow Discover cards', () => {
	// 	const cardNumberInput = wrapper.find(Input).at(1);
	// 	cardNumberInput.props().onChange({ target: { name: 'cardNumber1', value: '7000' } });
	// 	wrapper.update();

	// 	const saveButton = wrapper.find('[data-testid="submitButton"]');

	// 	expect(saveButton.prop('isDisabled')).toBe(false);
	// });
	// });
});

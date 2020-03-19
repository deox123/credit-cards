import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import useForm from '../../Hooks/useForm';

import Button from '../../Components/Button';
import Input from '../../Components/FormFields/InputDefault';
import CreditCard from '../../Components/CreditCard';

import { Container, CardNumberContainer, CardNumberInput, ErrorMessage, Label } from './styles';

import { generateStateSchema, stateValidatorSchema } from './schemas';

function CardForm({ name, numbers, date, onSubmit, id }) {
	const history = useHistory();

	const handleSubmit = (state) => {
		const newState = Object.keys(state).reduce(
			(acc, key) => {
				if (key.includes('cardNumber')) {
					acc.numbers.push({
						key,
						value: state[key].value,
					});
					return acc;
				}
				acc[key] = state[key].value;
				return acc;
			},
			{
				numbers: [],
				id,
			},
		);
		onSubmit(newState);
		history.push('/cards');
	};

	const numbersToPrepopulate = numbers.reduce((acc, part) => {
		acc[part.key] = part.value;
		return acc;
	}, {});

	const { state, disable, handleOnChange, handleOnSubmit } = useForm(
		generateStateSchema({ name, date, ...numbersToPrepopulate }),
		stateValidatorSchema,
		handleSubmit,
	);

	const inputRefs = {
		cardNumber1: useRef(null),
		cardNumber2: useRef(null),
		cardNumber3: useRef(null),
		cardNumber4: useRef(null),
		date: useRef(null),
		nameRef: useRef(null),
		submitRef: useRef(null),
	};

	const focusInput = (inputRef) => {
		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleDateChange = (event) => {
		if (event.target.value.length === 4) {
			focusInput(inputRefs.submitRef);
		}

		handleOnChange(event);
	};

	const focusFromCreditCard = (refKey) => () => {
		focusInput(inputRefs[refKey]);
	};

	const handleCardNumberChange = (event) => {
		if (event.target.value.length === 4) {
			let nextRef;
			const fieldName = event.target.name;
			const nextRefNumber = parseFloat(fieldName.slice(-1)) + 1;
			if (nextRefNumber > 4) {
				nextRef = 'date';
			} else {
				nextRef = `${fieldName.slice(0, fieldName.length - 1)}${nextRefNumber}`;
			}
			focusInput(inputRefs[nextRef]);
		}
		handleOnChange(event);
	};

	useEffect(() => {
		const { nameRef } = inputRefs;
		if (nameRef && nameRef.current) {
			nameRef.current.focus();
		}
	}, []);

	return (
		<Container>
			<CreditCard
				name={state.name.value}
				date={state.date.value}
				numbers={Object.keys(state)
					.filter((key) => key.includes('cardNumber'))
					.map((key) => ({
						key,
						value: state[key].value,
					}))}
				isNew={false}
				focusInputField={focusFromCreditCard}
			/>
			<Input
				label="Name"
				name="name"
				value={state.name.value}
				onChange={handleOnChange}
				errorMessage={state.name.error}
				ref={inputRefs.nameRef}
				data-testid="nameInput"
			/>
			<Label onClick={() => focusInput(inputRefs.cardNumber1)}>Card Number</Label>
			<CardNumberContainer>
				<CardNumberInput
					name="cardNumber1"
					id="cardNumber1"
					value={state.cardNumber1.value}
					onChange={handleCardNumberChange}
					maxLength={4}
					ref={inputRefs.cardNumber1}
				/>
				<CardNumberInput
					name="cardNumber2"
					value={state.cardNumber2.value}
					onChange={handleCardNumberChange}
					maxLength={4}
					ref={inputRefs.cardNumber2}
				/>
				<CardNumberInput
					name="cardNumber3"
					value={state.cardNumber3.value}
					onChange={handleCardNumberChange}
					maxLength={4}
					ref={inputRefs.cardNumber3}
				/>
				<CardNumberInput
					name="cardNumber4"
					value={state.cardNumber4.value}
					onChange={handleCardNumberChange}
					maxLength={4}
					ref={inputRefs.cardNumber4}
				/>
			</CardNumberContainer>
			<ErrorMessage>
				{state.cardNumber1.error ||
					state.cardNumber2.error ||
					state.cardNumber3.error ||
					state.cardNumber4.error}
			</ErrorMessage>
			<Input
				label="Expires on"
				name="date"
				value={state.date.value}
				onChange={handleDateChange}
				errorMessage={state.date.error}
				maxLength={4}
				ref={inputRefs.date}
				placeholder="MM/YY"
			/>
			<Button
				onClick={handleOnSubmit}
				isDisabled={disable}
				ref={inputRefs.submitRef}
				data-testid="submitButton"
			>
				Save
			</Button>
		</Container>
	);
}

CardForm.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	numbers: PropTypes.arrayOf(PropTypes.object),
	onSubmit: PropTypes.func,
	id: PropTypes.number,
};

CardForm.defaultProps = {
	name: '',
	date: '',
	numbers: [],
	onSubmit: () => {},
	id: +new Date(),
};

export default CardForm;

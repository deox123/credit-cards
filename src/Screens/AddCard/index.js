import React from 'react';

import CardForm from '../../Containers/CardForm';
import Heading from '../../Components/Heading';

import { addNewCard } from '../../core/localStorageService';

function AddCard() {
	return (
		<>
			<Heading>Add card to account</Heading>
			<CardForm onSubmit={addNewCard} />
		</>
	);
}

export default AddCard;

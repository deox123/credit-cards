import React from 'react';
import { useParams } from 'react-router-dom';

import { getCardById, updateCard } from '../../core/localStorageService';

import CardForm from '../../Containers/CardForm';
import Heading from '../../Components/Heading';

function AddCard() {
	const { id } = useParams();
	const cardDetailes = getCardById(+id);

	return (
		<>
			<Heading>Edit current card</Heading>
			<CardForm {...cardDetailes} id={+id} onSubmit={updateCard} />
		</>
	);
}

export default AddCard;

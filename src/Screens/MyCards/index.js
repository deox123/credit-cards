import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Heading from '../../Components/Heading';

import { getAllCards } from '../../core/localStorageService';

import { CardList, StyledCard as CreditCard } from './styles';

function MyCards() {
	const [myCards, setMyCards] = useState([]);

	useEffect(() => {
		const cards = getAllCards();
		setMyCards(cards);
	}, []);

	return (
		<>
			<Heading>My Cards</Heading>
			<CardList>
				{myCards.map((card) => {
					return (
						<Link to={`cards/${card.id}/edit`} key={card.id}>
							<CreditCard isViewMode {...card} />
						</Link>
					);
				})}
				<Link to="/cards/add">
					<CreditCard isNew />
				</Link>
			</CardList>
		</>
	);
}

export default MyCards;

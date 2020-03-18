const { localStorage } = window;

export const getAllCards = () => JSON.parse(localStorage.getItem('cards')) || [];

export const addNewCard = (newCard) => {
	const existingCards = getAllCards();
	localStorage.setItem('cards', JSON.stringify([...existingCards, newCard]));
};

export const getCardById = (cardId) => getAllCards().find(({ id }) => id === cardId);

export const updateCard = (card) => {
	const otherCards = getAllCards().filter(({ id }) => id !== +card.id);
	localStorage.setItem('cards', JSON.stringify([...otherCards, card]));
};

import React from 'react';
import Card from './Card';

const Cards = (props) => {
	const cards = props.cards ? props.cards : [];

	return (
		<div className='cards'>
			{cards.map((card) => {
				return <Card key={card.imdbID} card={card} {...card} />;
			})}
		</div>
	);
};

export default Cards;

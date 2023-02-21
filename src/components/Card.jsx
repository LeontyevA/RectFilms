import React from 'react';

const Card = (props) => {
	const card = props.card;

	return (
		<div className='row'>
			<div className='col s12'>
				<div className='card'>
					<div className='card-image'>
						{card.Poster === 'N/A' ? (
							<img
								src={`https://via.placeholder.com/468x450?text=${this.state.card.Title}`}
								alt={this.state.card.Title}
							></img>
						) : (
							<img src={card.Poster} alt={card.Title}></img>
						)}
						<span className='card-title'>{card.Title}</span>
					</div>
					<div className='card-content'>
						<p>{card.Title}</p>
						<p>
							{card.Year}{' '}
							<span className='right'>{card.Type}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

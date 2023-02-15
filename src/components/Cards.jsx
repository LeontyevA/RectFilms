import React from 'react';
import Card from "./Card";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards
        }
    }

    render() {
        console.log(this.state.cards);
        return (
            <div className='cards'>
                {this.state.cards.map(card => {
                         return <Card key={card.imdbID} card={card} {...card} /> })}
            </div>);
    }
}

export default Cards;
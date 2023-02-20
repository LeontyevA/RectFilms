import React from 'react';
import Card from './Card';

class Cards extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            cards: props.cards
        }
    }

    // componentDidMount(){
    //     console.log('componentDidMount');
    //     this.setState({cards: this.props.cards})
    // }

    // componentDidCatch
    
    render() {
        console.log('render');
        console.log(this.state.cards);
        return (
            <div className='cards'> 
                {this.props.cards.map(card => {
                         return <Card key={card.imdbID} card={card} {...card} /> })}
            </div>);
    }
}

export default Cards;
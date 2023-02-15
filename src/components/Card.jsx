import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            {this.state.card.Poster === 'N/A' ? <img src={`https://via.placeholder.com/468x450?text=${this.state.card.Title}`} alt={this.state.card.Title}></img> :
                            <img src={this.state.card.Poster} alt={this.state.card.Title}></img>}
                            <span className="card-title">{this.state.card.Title}</span>
                        </div>
                        <div className="card-content">
                            <p>{this.state.card.Title}</p>
                            <p>{this.state.card.Year} <span className='right'>{this.state.card.Type}</span></p>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Card;
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
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.state.card.Poster} alt={this.state.card.Title}></img>
                            <span className="card-title">{this.state.card.Title}</span>
                        </div>
                        <div className="card-content">
                            <p>{this.state.card.Title}</p>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Card;
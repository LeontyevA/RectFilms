import React from 'react';

import Cards from "../components/Cards"

class MainContainer extends React.Component {
    state = {
        cards: []
    }

    apikey = '1540ee60';
    componentDidMount() {
        console.log('componentDidMount');
        fetch('http://www.omdbapi.com/?apikey=1540ee60&s=matrix&page=1')

            .then(Response => {
                console.log(Response.statusText);
                return Response.json()
            })
            .then(data => {
                //console.log(data);
                this.setState({ cards: data.Search })
            })
    }

    render() {
        const {cards} = this.state
        return (
            <main className="content container">
                {cards.length ? (<Cards cards={cards}/>) : <h3>Загрузка...</h3>}
            </main>)
    }
}

export {MainContainer};



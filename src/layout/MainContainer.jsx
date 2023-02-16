import React from 'react';

import Cards from "../components/Cards"
import { Preloader } from '../components/Preloader';
import Search from '../components/Search';

class MainContainer extends React.Component {
    state = {
        cards: []
    }

    searchCards = (text) => {
        console.log('searchCards');
        if (text.length > 2) {
            fetch('http://www.omdbapi.com/?apikey=' + this.apikey + '&s=' + text + '&page=1')
                .then(Response => {
                    console.log(Response.statusText);
                    return Response.json()
                })
                .then(data => {
                    //console.log(data);
                    this.setState({ cards: data.Search })
                })
        }
    }

    apikey = '1540ee60';
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        const { cards } = this.state
        return (
            <main className="content container">
                <Search searchCards={this.searchCards} />
                {Array.isArray(cards) && cards.length ? (<Cards cards={cards} />) : <Preloader />}
            </main>)
    }
}

export { MainContainer };



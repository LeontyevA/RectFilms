import React from 'react';

import Cards from "../components/Cards"
import { Preloader } from '../components/Preloader';
import Search from '../components/Search';

class MainContainer extends React.Component {
    state = {
        cards: [],
    }

    search = ''
    apikey = '1540ee60';

    searchCards = (text) => {
        console.log('searchCards');
        this.search = text;
        fetch(`http://www.omdbapi.com/?apikey=${this.apikey}&s=${text}&page=1`)
            // .then(response => {
            //     console.log(response.statusText);
            //     return response.json()
            // })
            .then(response => response.json())
            .then(data => this.setState({ cards: data.Search }))
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
    }

    render() {

        const { cards } = this.state
        return (
            <main className="content container">
                <Search searchCards={this.searchCards} />
                {/* {Array.isArray(cards) && cards.length ? (<Cards cards={this.state.cards} />) : this.search > 0 ? <Preloader /> : ''} */}
                {cards.length ? (<Cards cards={this.state.cards} />) : this.search > 0 ? <Preloader /> : ''}
            </main>)
    }
}

export { MainContainer };



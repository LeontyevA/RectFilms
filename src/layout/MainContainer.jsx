import React from 'react';

import Cards from "../components/Cards"
import { Preloader } from '../components/Preloader';
import Search from '../components/Search';
import { Filter } from '../components/Filter';

class MainContainer extends React.Component {
    state = {
        cards: [],
    }

    search = '';
    filterIndex = 1;
    API_KEY = process.env.REACT_APP_API_KEY;

    getUrlParams = () => {
        let params =`apikey=${this.API_KEY}`;
        if (this.search !== '')
            params = `${params}&s=${this.search}`;
        if (this.filterIndex === 1)
            params = `${params}&type=movie`;
        if (this.filterIndex === 2)
            params = `${params}&type=series`;
        params = params + '&page=1';
        return params;
    }

    updateCards = () => {
        const url = 'https://www.omdbapi.com/?' + this.getUrlParams();
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ cards: data.Search }))
    }
    
    searchCards = (text) => {
        console.log('searchCards');

        this.search = text;
        this.updateCards();
    }

    changeFilter = (index) => {
        console.log('changeFilter');

        this.filterIndex = +index;
        this.updateCards();
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
                <Filter changeFilter={this.changeFilter} />
                {Array.isArray(cards) && cards.length ? (<Cards cards={this.state.cards} />) : this.search > 0 ? <Preloader /> : ''}
                {/* {cards.length ? (<Cards cards={this.state.cards} />) : this.search > 0 ? <Preloader /> : ''} */}
            </main>)
    }
}

export { MainContainer };



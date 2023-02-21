import React, { useState } from 'react';

import Cards from '../components/Cards';
import { Preloader } from '../components/Preloader';
import Search from '../components/Search';
import { Filter } from '../components/Filter';

const MainContainer = () => {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState();
	const [search, setSearch] = useState('');
	const [filterIndex, setFilterIndex] = useState(1);

	const API_KEY = process.env.REACT_APP_API_KEY;

	const getUrlParams = (s, f) => {
		let params = `apikey=${API_KEY}`;
		if (s !== '') params = `${params}&s=${s}`;
		if (f === 2) params = `${params}&type=movie`;
		if (f === 3) params = `${params}&type=series`;
		params = params + '&page=1';
		return params;
	};

	const updateCards = (s, f) => {
		setLoading(true);
		const url = 'https://www.omdbapi.com/?' + getUrlParams(s, f);
        console.log(url);
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setCards(data.Search);
				setLoading(false);
			});
	};

	const searchCards = (text) => {
		console.log('searchCards: ' + text);

		setSearch(text);
		updateCards(text, filterIndex);
	};

	const changeFilter = (index) => {

		setFilterIndex(+index);
		console.log(`changeFilter ${filterIndex}`);
		updateCards(search, +index);
	};

	return (
		<main className='content container'>
			<Search searchCards={searchCards} />
			<Filter changeFilter={changeFilter} />
			{loading ? (
				search.length > 0 ? (
					<Preloader />
				) : (
					''
				)
			) : (
				<Cards cards={cards} />
			)}
			{/* {cards.length ? (<Cards cards={this.state.cards} />) : this.search > 0 ? <Preloader /> : ''} */}
		</main>
	);
};

export { MainContainer };

import React, { useState } from 'react';

const Search = (props) => {
	const [search, setSearch] = useState('');
	const searchFuncion = props.searchCards;

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') searchFuncion(event.target.value);
	};

	return (
		<div className='input-field col s6'>
			<input
				id='search'
				type='text'
				className='validate input-search'
				placeholder='Поиск'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button
				className='btn search-btn'
				onClick={() => searchFuncion(search)}
			>
				Поиск
			</button>
			{/* <label for="last_name">Last Name</label> */}
		</div>
	);
};

export default Search;

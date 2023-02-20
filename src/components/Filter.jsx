import React, { useState } from 'react';

function Filter(props) {
	const [indFilter, setIndFilter] = useState(1);
	const changeFilter = props.changeFilter;

	const handleChange = (id) => {
		setIndFilter(id);
		//changeFilter(indFilter);
	};

	return (
		<div>
			<label>
				<input
					id='1'
                    className='with-gap'
					name='group1'
					type='radio'
					onChange={handleChange(1)}
					checked = {indFilter === 1}
				/>
				<span>Все</span>
			</label>
			<label>
				<input
					id='2'
                    className='with-gap'
					name='group1'
					type='radio'
					onChange={handleChange(2)}
                    checked={indFilter===2}
				/>
				<span>Фильмы</span>
			</label>
			<label>
				{/* <input class="with-gap" name="group1" type="radio" /> */}
				<input
					id='3'
                    className='with-gap'
					name='group1'
					type='radio'
					onChange={handleChange(3)}
					checked={indFilter === 3}
				/>
				<span>Сериалы</span>
			</label>
		</div>
	);
}

export { Filter };

import React from 'react';

const SearchButton = (props) => {
	return (
		<div className='col col-sm-4'>
			<button 
				type="button" 
				class="btn btn-light"
				onClick={props.setSearch(true)}
			>Search</button>
		</div>
	);
};

export default SearchButton;

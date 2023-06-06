import React from 'react';

const YearBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setYearValue(event.target.value)}
				placeholder='Type to search by year...'
			></input>
		</div>
	);
};

export default YearBox;

import React from 'react';

const SearchBox=({searchChange})=>{
	return(
		<div className='tc grow pa2'>
			<input type='search' placeholder='Search Robots' className='tc pa3 bn b--yellow bg-lightest-blue' onChange={searchChange}/>
		
		</div>
	);
}

export default SearchBox;
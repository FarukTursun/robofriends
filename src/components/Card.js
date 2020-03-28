import React from 'react';


const Card=({ name, email, id }) =>{
	return(
		<div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 helvetica robotpic'>
			<img alt='robot' src={`https://robohash.org/${id}?200*200`}/>
			<div>
				<h2>{name}</h2> 
				<p>{email}</p>
			</div>
		</div>



	);
}

export default Card;

/*Because 'props.name' and 'props.email' are javacript expression not html, so that we have to wrap them in { }*/
import React from 'react';

const Card = (props) => {
	return(
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw9 shadow-90'>
		<img alt='df' src={`https://www.robohash.org/${props.id}?200*200`} />
		<div>
		<h2>{props.name}</h2>
		<p>{props.email}</p>
		</div>
		</div>


		);
}

export default Card;
import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const cardcomponent = robots.map((user,i) => {
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
	});  
	return (
	<div>
	{cardcomponent}
	</div>

	);


}


/*const CardList = ({ robots }) => {
return (
<div>
{
	robots.map(user, i) => {
		return (
		<card key={i} id={robots[i].id}
		name={robots[i].name}
		email={robots[i].email}/>

		);
	})
}
</div>
);
}*/

export default CardList;
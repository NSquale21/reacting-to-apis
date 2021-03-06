import React from 'react';

const PeopleCard = ({ person }) => {
	return (
		<article className="col-6">
			<div className="card my-2 shadow">
				<div className="card-body text-center">
					<h4 className="card-title">{person.name}</h4>
					<p className="card-text">Age: {person.age}</p>
				</div>
			</div>
		</article>
	);
}

export default PeopleCard;
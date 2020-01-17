import React from 'react';

const FilmCard = ({ film }) => {
	return (
		<article className="col-8">
			<div className="card my-2 shadow">
				<div className="card-body text-center">
					<h4 className="card-title">{film.title}</h4>
					<p className="card-text">{film.description}</p>
				</div>
			</div>
		</article>
	);
}

export default FilmCard;
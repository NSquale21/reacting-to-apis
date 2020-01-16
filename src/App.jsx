import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmCard from './components/FilmCard';


class App extends React.Component {
	state = {
		films: []
	};
	
	componentDidMount() {
		fetch('https://ghibliapi.herokuapp.com/films')
		.then(res => res.json())
		.then(films => this.setState({ films }));
	}
	
	render() {
		return (
			<main className="container">
				<section className="row my-2 justify-content-center">
					{this.state.films.map(film => {
						return (
							<FilmCard key={film.id} film={film} />
						);
					})}
				</section>
			</main>
    );
	}
}

export default App;
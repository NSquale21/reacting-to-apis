import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmCard from './components/FilmCard';
import PeopleCard from './components/PeopleCard'

class App extends React.Component {
	state = {
		films: [],
		people: [],
		isFilms: false,
		isPeople: false
	};

	async componentDidMount() {
		let res = await fetch('https://ghibliapi.herokuapp.com/films');
		let films = await res.json();
		let res2 = await fetch('https://ghibliapi.herokuapp.com/people');
		let people = await res2.json();
		this.setState({ films, people });
	}

	handlePeople = () => this.setState({ isFilms: false, isPeople: true });
	handleFilms = () => this.setState({ isFilms: true, isPeople: false });
	handleHome = () => this.setState({ isFilms: false, isPeople: false });

	render() {
		if (this.state.isFilms && !this.state.isPeople) {
			return (
				<main className="container">
					<header className="d-flex">
						<button type="button" onClick={this.handleHome} className="btn btn-primary shadow my-3 mx-auto">Home</button>
					</header>
					<section className="row my-2 justify-content-center">
						{this.state.films.map(film => <FilmCard key={film.id} film={film} />)}
					</section>
				</main>
			);
		} else if (this.state.isPeople && !this.state.isFilms) {
			return (
				<main className="container">
					<header className="d-flex">
						<button type="button" onClick={this.handleHome} className="btn btn-primary shadow my-3 mx-auto">Home</button>
					</header>
					<section className="row my-2 justify-content-center">
						{this.state.people.map(person => <PeopleCard key={person.id} person={person} />)}
					</section>
				</main>
			);
		} else {
			return (
				<main className="container">
					<section className="row my-3 flex-column align-items-center">
						<img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli Logo" />
						<div className="d-flex">
							<button type="button" onClick={this.handleFilms} className="btn btn-primary shadow m-5">Load Films</button>
							<button type="button" onClick={this.handlePeople} className="btn btn-primary shadow m-5">Load People</button>
						</div>
					</section>
				</main>
			);
		}
	}
}

export default App;
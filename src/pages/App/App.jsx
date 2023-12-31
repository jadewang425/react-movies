import { useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage';
import MovieListPage from '../MoviesListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from "../../data"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
	const [user, setUser] = useState({})
	console.log(movies)

	return (
		<main className="App">
			{ user ?
				<>
					<NavBar />
					<Routes>
						<Route path="/" element={<MovieListPage movies={movies} />} />
						<Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
						<Route path="/actors" element={<ActorListPage movies={movies} />} />
					</Routes>
				</>
				:
				<LoginPage />
			}
		</main>
	);
}
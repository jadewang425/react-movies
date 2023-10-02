import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage';
import MovieListPage from '../MoviesListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from '../../data'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
	const [user, setUser] = useState({})

	return (
		<main className="App">
			{ user ?
				<>
					<NavBar />
					<Routes>
						<Route path="/" element={<MovieListPage movies={ movies } />} />
						<Route path="/movies/:movieName" element={<MovieDetailPage />} />
						<Route path="/actors" element={<ActorListPage />} />
					</Routes>
				</>
				:
				<LoginPage />
			}
		</main>
	);
}
import MovieCard from "../../components/MovieCard/MovieCard"
import "./MovieListPage.css"

export default function MovieListPage({ movies }) {
    const movieCards = movies.map((movie, idx) => (
        <MovieCard movie={movie} key={idx} />
    ))

    return (
        <main>
            <h1>Movie List Page</h1>
            <div className="movie-cards">
                { movieCards }
            </div>
            
        </main>
    )
}
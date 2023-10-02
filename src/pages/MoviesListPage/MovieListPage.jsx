import MovieCard from "../../components/MovieCard/MovieCard"
import "./MovieListPage.css"
export default function MovieListPage({ movies }) {
    console.log(movies)
    const movieCards = movies.map((movie, idx) => (
        <MovieCard movie={movie} key={idx} />
    ))
    
    console.log(movieCards)
    return (
        <main>
            <h1>Movie List Page</h1>
            <div className="movie-cards">
                { movieCards }
            </div>
            
        </main>
    )
}
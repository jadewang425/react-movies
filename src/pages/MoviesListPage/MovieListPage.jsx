import MovieCard from "../../components/MovieCard/MovieCard"
import { movies } from "../../data.js"
export default function MovieListPage() {
    const movieCards = movies.map((movie, idx) => {
        <MovieCard movie={movie} key={idx} />
    })
    console.log(movieCards)
    return (
        <main>
            <h1>Movie List Page</h1>
            { movieCards }
        </main>
    )
}
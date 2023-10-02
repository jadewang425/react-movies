import MovieCard from "../../components/MovieCard/MovieCard"
export default function MovieListPage({ movies }) {
    const movieCards = movies.map((movie, idx) => {
        {<MovieCard movie={movie} key={idx} />}
    })
    console.log(movieCards)
    return (
        <main>
            <h1>Movie List Page</h1>
            { movieCards }
        </main>
    )
}
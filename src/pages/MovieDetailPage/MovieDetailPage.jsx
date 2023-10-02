import { useParams } from "react-router-dom"

export default function MovieDetailPage({ movies }) {
    const { movieName } = useParams()
    const movie = movies.find( m => m.title === movieName)
    console.log(movie.cast)
    return (
        <div>
            <div className="text-content">
                <h1>Movie Detail Page</h1>
                <p>Relased: {movie.releaseDate}</p>
                <h3>Cast Members:</h3>
                <ul>
                    {movie.cast.join(', ')}
                </ul>
            </div>
            <img src={movie.posterPath} alt="Wonder Woman 1984" />
        </div>

    )
}
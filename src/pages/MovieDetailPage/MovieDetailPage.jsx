import { useParams } from "react-router-dom"
import './MovieDetailPage.css'

export default function MovieDetailPage({ movies }) {
    const { movieName } = useParams()
    const movie = movies.find( m => m.title === movieName)
    const casts = movie.cast
    // console.log('casts', casts)
    const castList = casts.map(cast => (
        <li>{cast}</li>
    ))
    return (
        <div className="movieDetail">
            <div className="text-content">
                <h1>{movie.title}</h1>
                <p>Relased: {movie.releaseDate}</p>
                <h3>Cast Members:</h3>
                <ul>
                    
                    {/* {movie.cast.join(', ')} */
                        castList
                    }
                    
                </ul>
            </div>
            <div>
                <img className="moviePoster" src={movie.posterPath} alt={movie.title} />
            </div>
        </div>

    )
}
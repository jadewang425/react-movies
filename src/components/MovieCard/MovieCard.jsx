import { Link } from "react-router-dom"
export default function MovieCard({ movie }) {
    return (
        <div className="card" style={{width: "18rem", margin: "10px"}}>
            <Link to={`movies/${movie.title}`}>
                <img src={movie.posterPath} alt="" className="card-img-top" />
                <h5 className="card-title">{ movie.title }</h5>
                <p className="card-text">Release: {movie.releaseDate}</p>
            </Link>
        </div>
    )
}
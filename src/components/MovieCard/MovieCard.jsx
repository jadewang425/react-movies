export default function MovieCard({ movie }) {
    return (
        <div className="card" style={{width: "18rem", margin: "10px"}}>
            <img src={movie.posterPath} alt="" className="card-img-top" />
            <h5 className="card-title">{ movie.title }</h5>
            <p className="card-text">Release: {movie.releaseDate}</p>
        </div>
    )
}
export default function MovieCard({ movie }) {
    return (
        <div className="card">
            <img src={movie.posterPath} alt="" />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.releaseDate}</p>
            </div>
        </div>
    )
}
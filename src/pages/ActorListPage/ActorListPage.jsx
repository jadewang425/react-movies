import ActorCard from "../../components/ActorCard/ActorCard"
import "./ActorListPage.css"

export default function ActorListPage({movies}) {
    const movieCasts = movies.map((movie) => (
        movie.cast
    ))
    const castArray = movieCasts.flat()
    const setCast = new Set(castArray)
    const actors = Array.from(setCast).sort()
    console.log('actors', actors)
    const actorCards = actors.map(actor => (
        <ActorCard actor={actor}/>
    ))
    return (
        <main>
            <h1>Actor List Page</h1>
            <div className="actor-cards">
                { actorCards }
            </div>
        </main>
    )
}
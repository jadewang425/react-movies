import { Link } from "react-router-dom"
export default function ActorCard({ actor }) {
    return (
        <div className="card" style={{width: "18rem", margin: "10px"}}>
            <Link to={`actors/${actor}`}>
                <img src="https://picsum.photos/200" alt="" />
                <h5 className="card-title">{ actor }</h5>
            </Link>
        </div>
    )
}
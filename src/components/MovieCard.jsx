import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    return (
        <div className="card h-100 d-flex flex-column">
            <img
                src={`${backendUrl}/images/${movie.image}`}
                className="card-img-top"
                alt={movie.title}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    {movie.title} <br /> {movie.director}
                </h5>
                <p className="card-text">{movie.abstract}.</p>
                <Link className="btn btn-primary mt-auto" to={`/movies/${movie.id}`}>
                    Show details
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;

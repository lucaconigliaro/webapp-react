import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleMoviePage() {
    const { id } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`${backendUrl}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data);
            console.log("Dati ricevuti:", resp.data.data);
            console.log("Vote Avg:", resp.data.data.vote_avg)
        });
    }, []);

    return (
        <>
            {movie && (
               <section className="my-3 d-flex align-items-start">
               <div className="me-3">
                   <img className="w-100" style={{ maxWidth: "300px" }} src={`${backendUrl}/images/${movie.image}`} alt={movie.title} />
               </div>
               <div>
                   <h1 className="mb-2">{movie.title}</h1>
                   <h5 className="mb-3">{movie.director}</h5>
                   <p className="mb-1"><strong>Anno:</strong> {movie.release_year}</p>
                   <p className="mb-1"><strong>Genre:</strong> {movie.genre}</p>
                   <p className="mb-1"><strong>Vote:</strong> {movie.vote_avg}</p>
               </div>
           </section>           
            )}
        </>
    )
};

export default SingleMoviePage;
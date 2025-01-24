import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

        useEffect(() => {
            axios.get(`${backendUrl}/movies`).then((resp) => {
                setMovies(resp.data.data);
            });
        }, [])

    return (
        <>
            <section>
                <h1>Movies Page</h1>
                <p>Tutti i film nel catalogo</p>
            </section>
            <section>
                <h2>Movies List</h2>
                <div className="row row-cols-1 row-cols-sm-2 row cols-md-3 row-cols-lg-4 g-3">
                    {movies.map((curMovie) => (
                        (<div className="col-12 col-sm-6 col-md-4 col-lg-3" key={curMovie.id}>
                            <MovieCard movie={curMovie} />
                        </div>)
                    ))}
                </div>
            </section>
        </>
    )
};

export default MoviesPage;
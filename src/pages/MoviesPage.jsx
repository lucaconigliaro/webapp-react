import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const getMovies = () => {
        const params = {};
        if (search.length > 0) {
            params.search = search;
        }
        axios.get(`${backendUrl}/movies`, { params }).then((resp) => {
            setMovies(resp.data.data);
        });
    };

    useEffect(() => {
        getMovies()
    }, []);

    
    return (
        <>
            <section>
                <h1>Movies List</h1>
                <div className="my-4 d-flex">
                    <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        type="search"
                        className="form-control"
                        placeholder="Search Movie"
                        aria-label="Search Movie"
                    />
                    <button
                        onClick={getMovies}
                        className="btn btn-primary ms-2">
                        Search
                    </button>
                </div>
                {movies.length > 0 ? (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        {movies.map((curMovie) => (
                            <div className="col" key={curMovie.id}>
                                <MovieCard movie={curMovie} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="alert alert-warning">
                        Movies Not Found
                    </div>
                )}
            </section>
        </>
    )
};

export default MoviesPage;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import Stars from "../components/Stars";
import ReviewForm from "../components/ReviewForm";

const initialValues = {
    name: "",
    text: "",
    vote: 0,
};

function SingleMoviePage() {
    const { slug } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [movie, setMovie] = useState(null);
    const [formData, setFormData] = useState(initialValues);


    const getMovie = () => {
        axios.get(`${backendUrl}/movies/${slug}`).then((resp) => {
            setMovie(resp.data.data);
        });
    };

    useEffect(() => {
        getMovie();
    }, []);

    const submitReview = () => {
        axios.post(`${backendUrl}/movies/${movie.id}/reviews`, formData).then((resp) => {
            setFormData(initialValues);
            getMovie();
        });
    };

    return (
        <>
            {movie && (
                <>
                    <section className="my-3 d-flex align-items-start">
                        <div className="me-3">
                            <img className="w-100" style={{ maxWidth: "300px" }} src={`${backendUrl}/images/${movie.image}`} alt={movie.title} />
                        </div>
                        <div>
                            <h1 className="mb-2">{movie.title}</h1>
                            <h5 className="mb-3">{movie.director}</h5>
                            <p className="mb-1"><strong>Anno:</strong> {movie.release_year}</p>
                            <p className="mb-1"><strong>Genre:</strong> {movie.genre}</p>
                            <p className="mb-1"><strong>Average Rating:</strong> <Stars vote={movie.vote_avg} /></p>
                        </div>
                    </section>
                    <section>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                            {movie.reviews.map(curReview => <ReviewCard key={curReview.id} review={curReview} />)}
                        </div>
                    </section>
                    <section>
                        <div className="row justify-content-center my-5">
                            <div className="col-6">
                                <h5>Lascia la tua recensione!</h5>
                                <ReviewForm
                                    formData={formData}
                                    setFormData={setFormData}
                                    submitReview={submitReview}
                                />
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
};

export default SingleMoviePage;
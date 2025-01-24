import { Link } from "react-router-dom";

function Homepage() {
    return (
        <>
            <section>
                <h1>HomePage</h1>
                <Link to="/movies" className="btn btn-primary">
                    Show Movies
                </Link>
            </section>
        </>
    )
};

export default Homepage;
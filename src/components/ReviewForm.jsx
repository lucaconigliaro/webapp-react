import { useState } from "react";

function ReviewForm({ formData, setFormData, submitReview }) {
    const votes = Array.from(Array(6).keys());
    const [error, setError] = useState(false);

    const setFieldValue = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        const newFormData = { ...formData };
        newFormData[fieldName] = value;
        setFormData(newFormData);
    };

    const isDataValid = () => {
        if (
            formData.name.length <= 3 ||
            formData.vote < 0 ||
            formData.vote > 5 ||
            (formData.text.length > 0 && formData.text.length < 5)
        ) {
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false);
        if (!isDataValid()) {
            setError(true);
        } else {
            submitReview(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Name:
                </label>
                <input
                    placeholder="Your name..."
                    name="name"
                    type="text"
                    className="form-control w-50"
                    id="name"
                    onChange={setFieldValue}
                    value={formData.name}
                />
            </div>
            <div className="mb-3 w-50">
                <label htmlFor="text" className="form-label">
                    Leave a review:
                </label>
                <textarea
                    placeholder="Add review..."
                    className="form-control"
                    name="text"
                    id="text"
                    onChange={setFieldValue}
                    value={formData.text}></textarea>
            </div>
            <div className="mb-3 w-25">
                <label htmlFor="vote">Select your vote:</label>
                <select
                    name="vote"
                    className="form-select"
                    id="vote"
                    onChange={setFieldValue}
                    value={formData.vote}
                >
                    {votes.map((curVote) => (
                        <option key={curVote} value={curVote}>
                            {curVote}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            {error && (
                <div className="text-danger mt-2">Please fill in the form correctly.</div>
            )}
        </form>
    );
}

export default ReviewForm;
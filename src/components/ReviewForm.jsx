import { useState } from "react";

const initialValues = {
    name: "",
    text: "",
    vote: 0,
};

function ReviewForm() {
    const votes = Array.from(Array(6).keys());
    const [formData, setFormData] = useState(initialValues);
    
    const setFieldValue = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
        const newFormData = { ...formData };
        newFormData[fieldName] = value;
        setFormData(newFormData);
    }

    return (
        <form>
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
            <div
                className="mb-3 w-50">
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
                <label htmlFor="vote">
                    Select your vote:
                </label>
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

            <button
                type="submit"
                className="btn btn-primary">
                Submit
            </button>
        </form>
    )
};

export default ReviewForm;
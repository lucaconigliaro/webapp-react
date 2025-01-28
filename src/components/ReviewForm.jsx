function ReviewForm() {
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
                ></textarea>
            </div>
            <div className="mb-3 w-25">
                <label htmlFor="vote">
                    Select your vote:
                </label>
                <select
                    name="vote"
                    className="form-select"
                    id="vote"
                >
                    <option value=""></option>
                </select>
            </div>

            <button
                type="submit"
                class="btn btn-primary">
                Submit
            </button>
        </form>
    )
};

export default ReviewForm;
function ReviewCard({ review }) {
    return (
        <>
            <div className="card mx-2">
                <div className="card-body">
                    <p className="mb-1">{review.text}</p>
                    <p className="mb-1"> <strong>Vote:</strong> {review.vote}</p>
                    <h6 className="mb-1"> <strong>Review by:</strong> {review.name}</h6>
                    <p className="mb-1"><strong>Date:</strong> {review.updated_at}</p>
                </div>
            </div>
        </>
    )
};

export default ReviewCard;
function Stars({ vote }) {
    const fullStars = Math.floor(vote);
    const halfStar = vote % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="fas fa-star star-gold"></i>);
    }
    if (halfStar) {
        stars.push(<i key="half" className="fas fa-star-half-alt star-gold"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="far fa-star star-gold"></i>);
    }

    return <div>{stars}</div>;
};

export default Stars;



import React from "react";
interface RattingType {
    averageRating: number
}

const GetRatting = ({ averageRating }: RattingType) => {
    const getRating = (ratingsNum: number) => {
        const roundedRatings = Math.floor(ratingsNum);
        const isHalfStar = ratingsNum % 1 !== 0;

        const emptyRatingCount = 5 - roundedRatings - (isHalfStar ? 1 : 0);
        const ratings = [];

        for (let i = 0; i < roundedRatings; i++) {
            ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
        }

        if (isHalfStar) {
            ratings.push(<i className="fas fa-star-half-alt" key="half-star"></i>);
        }

        for (let i = 0; i < emptyRatingCount; i++) {
            ratings.push(<i className="fas fa-star" key={`p-${i}`}></i>);
        }

        return ratings;
    };
    return <>{getRating(averageRating)}</>;
};

export default GetRatting;

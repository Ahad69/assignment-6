import React from "react";
// import { UisStar, UisStarHalfAlt } from "@iconscout/react-unicons-solid";
// import { UilStar } from "@iconscout/react-unicons";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const RatingStar = ({ rating, size }) => {
  const starsTotal = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = starsTotal - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div>
      {size == "large" ? (
        <div className="review-stars flex items-center">
          {[...Array(filledStars)].map((_, index) => (
            <span key={index} className="star filled text-orange-500">
              {" "}
              <BsStarFill className="text-lg" />{" "}
            </span>
          ))}
          {hasHalfStar && (
            <span className="star half-filled text-orange-500">
              <BsStarHalf className="text-lg" />
            </span>
          )}

          {[...Array(emptyStars)].map((_, index) => (
            <span key={index} className="star text-orange-500">
              <BsStar className="text-lg" />
            </span>
          ))}
        </div>
      ) : (
        <div className="review-stars flex items-center">
          {[...Array(filledStars)].map((_, index) => (
            <span key={index} className="star filled text-orange-500 ">
              {" "}
              <BsStarFill className="w-4" />
            </span>
          ))}
          {hasHalfStar && (
            <span className="star half-filled text-orange-500 ">
              <BsStarHalf className="w-4" />
            </span>
          )}

          {[...Array(emptyStars)].map((_, index) => (
            <span key={index} className="star text-orange-500">
              <BsStar className="w-4" />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingStar;

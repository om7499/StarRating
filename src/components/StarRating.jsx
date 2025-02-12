import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon from React Icons
const totalStars = [1,2,3,4,5]
 
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      <div className="stars">
        {totalStars.map((_, index) => {
          const starValue = index + 1;
          return (
            <span
            key={index}
              className={`star ${starValue <= (hover || rating) ? "active" : ""}`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            >
              {/* React Icon used heare */}
              <FaStar size={30} /> 
            </span>
          );
        })}
      </div>
      <p className="rating-text">{rating ? `${rating}/5 Rating` : "No rating yet"}</p>
    </div>
  );
};

export default StarRating;

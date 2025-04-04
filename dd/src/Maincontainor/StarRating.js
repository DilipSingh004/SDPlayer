import React from "react";

const StarRating = ({ rating, onChange }) => {
  const stars = Array(5).fill(0).map((_, index) => {
    return (
      <span key={index} onClick={() => onChange(index + 1)}>
        {index < rating ? "★" : "☆"}
      </span>
    );
  });

  return (
    <div>
      {stars}
    </div>
  );
};

export default StarRating;

import React, { useState } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

const StarRating = ({ initialRating, maxRating, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (index) => {
    setRating(index + 1);
    if (onRate) onRate(index + 1);
  };

  return (
    <div style={{ display: 'flex' }}>
      {Array.from({ length: maxRating }, (_, index) => (
        <Star 
          key={index}
          filled={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  initialRating: PropTypes.number,
  maxRating: PropTypes.number,
  onRate: PropTypes.func,
};

StarRating.defaultProps = {
  initialRating: 0,
  maxRating: 5,
};

const Rate = ({}) => {
    const handleRatingChange = (newRating) => {
      console.log('New rating:', newRating);
    };
  
    return (
      <div>
        <StarRating 
          initialRating={3} 
          maxRating={5} 
          onRate={handleRatingChange} 
        />
      </div>
    );
  };
  
  export default Rate;
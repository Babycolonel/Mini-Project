import React, { useEffect, useState } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';
import Review from './Review';

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

  
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    // Retrieve the current rating from localStorage
    // const bookData = localStorage.getItem('books');
    // const booksArray = JSON.parse(bookData);


    // const savedRating = Number(booksArray[0]?.points);


    // console.log(savedRating +"hello");
    console.log(currentRating);

    setCurrentRating(currentRating);
    

  }, []);

  const handleRatingChange = (newRating) => {
    console.log('New rating:', newRating);
    localStorage.setItem('currentRating', newRating);
  };
  
    return (
      <div>
        <StarRating 
          initialRating={currentRating} 
          maxRating={5} 
          onRate={handleRatingChange} 
        />
      </div>
    );
  };
  
  export default Rate;
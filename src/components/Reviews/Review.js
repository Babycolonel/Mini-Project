import React, { memo } from 'react';
import '../App.css';
import Review from '.'

const Review1 = ({ reviewBook }) =>
  <div className="app">
      <div className="reviews" >
      <Review review={reviewBook} />
    </div>
  </div>
  
  export default memo(Review1);
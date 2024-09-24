import "./About.css";


import React, { useEffect, useState, createContext, useContext, useLayoutEffect, useCallback } from 'react';

import "./Home.css";
import "./About.css";
import "./Layout";
import Review from "./Reviews/Review";
import Rate from "./Reviews/StarRating";
import Book from './Books/Book'; 
import { FETCH_REVIEW_BOOK, STORY_ARCHIVE } from '../constants/actionTypes';
import store from "../store";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { handleFetchReviewBook } from "../action/review";

const About = (props) => {
  const { dispatch, reviewBook } = props;

  const [reviewedBook, setReviewedBook] = useState(null);

  const pa = useParams();

  const fetchReviewBook = (bookId) => {
    // store.dispatch({ type: FETCH_REVIEW_BOOK, id: bookId });
  }
      
  useEffect(() => {
    setReviewedBook(reviewBook);
  }, [reviewBook?.objectID]);

  useEffect(() => {
    // fetchReviewBook(pa.id);
    // dispatch(handleFetchReviewBook(pa.id));
  }, [pa.id]);

 return (
   <>
     <head>
       <link rel="stylesheet" type="text/css" href="App.css"/>
       <script defer src='activePage.js'></script>
     </head>

     <div id="home">
     <div id="titleBackground">
     <div id="titleName">
           <p>「✦ Book reviews ✦」</p>
       </div>

       </div>
       <div className="headerBorder">
        <p className="ABheaderText">Review</p>
        </div>
          <div className="reviewText">
            <button onClick={() => store.dispatch({ type: FETCH_REVIEW_BOOK, id: pa.id })}>abc</button>
          <Review reviewBook={reviewedBook} />
         {/* {reviews.map(book => (
          <Review
            key={book.objectID}
            story={book.review}
          
          />
        ))} */}
         </div>
 
     </div>
     </>
 );
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    reviewBook: state,
  };
}

export default connect(
  mapStateToProps,
)(About);

// export default connect(store => ({
//   reviewBook: store.reviewReducer
// }))(About);

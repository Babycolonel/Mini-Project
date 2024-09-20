import "./About.css";


import React, { useEffect, useState, createContext, useContext } from 'react';

import "./Home.css";
import "./About.css";
import "./Layout";
import Review from "./Reviews/Review";
import Rate from "./Reviews/StarRating";
import Book from './Books/Book'; 
import { REVIEW_BOOK, STORY_ARCHIVE } from '../constants/actionTypes';
import store from "../store";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
// import { withRouter } from "react-router-dom";

const About = (props) => {
  const { reviews } = props;

  const [reviewItem, setReviewItem] = useState(null);

  const pa = useParams();

  // const router = useRoutes();

  useEffect(() => {
    const book = reviews.find(item => item.objectID == pa.id);
    console.log(book);
    setReviewItem(book);
  }, [pa.id, reviews.length]);

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
         <Review reviews={reviewItem ? [reviewItem] : []} onReview ={id => store.dispatch({type: REVIEW_BOOK, id}) }/>
         </div>
 
     </div>
     </>
 );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    reviews: state,
  };
}

export default connect(
  mapStateToProps,
)(About);

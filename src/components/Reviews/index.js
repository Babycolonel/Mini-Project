import '../About.css';
import { Rate } from './StarRating';

import booksData from '../../data/booksData';
import InputLabel from '@mui/material/InputLabel';
import About from '../About';
import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';
import '../Layout';
const Review = ({ review }, userLoggedIn, users, id, newRating) => {
    const {
      title,
      url,
      author,
      num_comments,
      image,
      points,
      objectID,
    } = review;

    const [reviewText, setReviewText] = useState('');

    const handleTextChange = (event) => {
      setReviewText(event.target.value); // Update state with the textarea value
      setUserReviews(reviewText);
    };


    const [userReviews, setUserReviews] = useState([]);
    const fetchUserReviews = () => {
      axios.get('http://localhost:7000/users')
        .then(response => {
           setUserReviews(response.data); // Update state with the user data
        })
        .catch(error => {
          console.error('There was an error fetching the reviews!', error);
        });
    };
    
    //call at beginning of function so that it immediately checks for users instead of only checking after the account is made
  
  
  
    const handleCreateReview = () => {

      console.log(userReviews)
      console.log("idk" + newRating);
      console.log(users, id);
      if(userLoggedIn){
      // setShow(false);
      //add logic to send post to db in order to create a new user
      //creating a new user in DB
      axios.post('http://localhost:7000/register', {
        id: id,
        review: userReviews,
        stars: newRating,
        created_at: 'now'
      }).then(response => {
        console.log("ADded review", response.data);
        fetchUserReviews();
       }).catch(error => {
        console.log("didnt add review", error);
      })
      }
      else if (!userLoggedIn){
        alert("please log in");
      }   
    };

    
    return (
      <div className='review-container'>
      <div className="reviewBig">
        <div>
          <img src={image} className='reviewImage'></img>
        </div>
        <div className='reviewTitle'>
          <div className='reviewTitle'>
            <p id='p-title'>{title}</p>
            <p>{author}</p>
          </div>
          <textarea
            col ="30"
            rows="20"
            type="text"
            id='reviewText'
            placeholder="Leave a Review!"
            value={reviewText}
            onChange={handleTextChange}
          />
          <div className = "rateStyle">
            <Rate 
            starR = {points}
            >  
            </Rate>
          </div>
          <button id="reviewButton" onClick={handleCreateReview}>Save</button>
        </div>
      </div>

      </div>
    );
  }


  export default Review;

  
import '../About.css';
import { Rate } from './StarRating';
import { useOutletContext } from 'react-router-dom';

import booksData from '../../data/booksData';
import InputLabel from '@mui/material/InputLabel';
import About from '../About';
import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';
import '../Layout';
import StarRating from './StarRating';
const Review = ({ review, users}) => {
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
    const { userLoggedIn, userId } = useOutletContext();
    console.log('User Logged In:', userLoggedIn);
    console.log('User ID:', userId);
    const handleTextChange = (event) => {
      setReviewText(event.target.value); // Update state with the textarea value
      setUserReviews(reviewText);
    };

    const processUserInfo = () => {
      if (userLoggedIn) {
        console.log(`User ID: ${userId}`);
      } else {
        console.log('User is not logged in.');
      }
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
  
    const [newRating, setNewRating] = useState(0);
    
    const handleRatingChange = (rating) => {
      setNewRating(rating); // Update the newRating state
    };
    const handleCreateReview = () => {

      console.log(userReviews)
      console.log("idk" + newRating);
      console.log(userId);
      if(userLoggedIn){
      // setShow(false);
      //add logic to send post to db in order to create a new user
      //creating a new user in DB
      axios.post('http://localhost:7000/register', {
        id: userId,
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
            starR = {newRating}
            onRatingChange={handleRatingChange}
            >  
            </Rate>
          </div>
          <button id="reviewButton" onClick={handleCreateReview}>Save</button>
        </div>
      </div>

      </div>
      
    );
    return {
      processUserInfo,
    };
  };


  export default Review;

  
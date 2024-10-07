import { Button } from '@mui/material';
import '../Leaderboard.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';

import {DisplayRate} from '../Reviews/StarRating';
import axios from 'axios';
const Profile = ({ profile}) => {

const navigate = useNavigate();

const {
    title,
    url,
    author,
    num_comments,
    points,
    image,
    objectID,
    ranking,
    review,
    stars,
    reviewID,
    
} = profile;

const handleClick = (id) => {
  // navigate(`/about/${id}`);
  // onReview(id);
  console.log("profile hi " + {reviewID});
}

const handleDelete = (id) =>{
console.log("delete" + id)

// axios.get('http://localhost:7000/reviews')

    axios.delete(`http://localhost:7000/remove/${id}`)
    .catch(error => {
      console.error('Error deleting the book:', error);
    })

};
/* layout of the UI when displaying the state from the store */
    return (
      <div className='leaderboard-container' >

        <div className="story">
            
            <button onClick={() => handleDelete(reviewID)}> delete</button>


            <div className='homePageTitles1' >
                <span>
                <a>{title}</a>
                </span>
                <br></br>
            </div>
            
        <div className='homePageText1'>
            <span>{author}</span>
            <br></br>


        </div>
        <div><p className="Review"> {review}</p></div>
        <img src={image} className='bookImage1' ></img>
        <br></br>
        <div  className ="RankStar">
          <DisplayRate
          star = {stars}>
            
          </DisplayRate>
        </div>

      </div>
      </div>  
    );
  }

// const ProfileReviews = ({profileReview}) => {
//   const {
//     id,
//     review,
//     stars,
// } = profileReview;


//     return (
//       <div>test work</div>
//     );
// };


  export default Profile;
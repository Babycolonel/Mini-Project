import { Button } from '@mui/material';
import '../Leaderboard.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useState } from 'react';
import {DisplayRate} from '../Reviews/StarRating';
import axios from 'axios';
import '../Profile.css'
const Profile = ({ profile, refresh, books}) => {

const navigate = useNavigate();

const {

    review,
    stars,
    reviewID,
    bookID,
    
} = profile;
console.log(books)
const {
  title,
  url,
  author,
  num_comments,
  points,

  objectID,
  ranking,
  image,

} = books.length ? books[bookID] : {}

const handleClick = (id) => {
  // navigate(`/about/${id}`);
  // onReview(id);
  console.log("profile hi " + {reviewID});
}
const [updateTrigger, setUpdateTrigger] = useState(false);

const handleDelete = (id) =>{
  console.log("delete" + id)
  const data ="review deleted"

  refresh(data)
  // axios.get('http://localhost:7000/reviews')

    axios.delete(`http://localhost:7000/remove/${id}`)
    .then(() => {

    })

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
            
        {/* <div className='homePageText1'>
            <span>{author}</span>
            <br></br>


        </div> */}
        <div><p className="ReviewDisplay"> {review}</p></div>
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
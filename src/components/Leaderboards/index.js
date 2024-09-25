import { Button } from '@mui/material';
import '../Leaderboard.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import BookMark from '../BookMark';
import Rate from '../Reviews/StarRating';
const Ranks = ({ ranks }) => {

  const navigate = useNavigate();

const {
    title,
    url,
    author,
    num_comments,
    points,
    image,
    objectID,
} = ranks;

  
/* layout of the UI when displaying the state from the store */
    return (
      <div className='homePageContainer' >
        <div className="story">
            
            <div className='homePageTitles'>
                <span>
                <a>{title}</a>
                </span>
                <br></br>
            </div>
            
        <div className='homePageText'>
            <span>{author}</span>
            <br></br>
            <span>{num_comments} comments</span>
            <br></br>
        </div>
        <div  className ="RankStar">
          <Rate></Rate>
        </div>
        <img src={image} className='bookImage'></img>
            <br></br>
      </div>
      </div>  
    );
  }



  export default Ranks;
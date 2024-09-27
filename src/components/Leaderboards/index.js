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
    rank,
} = ranks;

  
/* layout of the UI when displaying the state from the store */
    return (
      <div className='leaderboard-container' >
        <div className="story">
            
            <div className='homePageTitles1'>
                <span>
                <a>{title}</a>
                </span>
                <br></br>
            </div>
            
        <div className='homePageText1'>
            <span>{author}</span>
            <br></br>
            <span>{num_comments} comments</span>
            <br></br>
            <span>#{rank}</span>
        </div>
        <div  className ="RankStar">
          <Rate></Rate>
        </div>
        <img src={image} className='bookImage1'></img>
            <br></br>
      </div>
      </div>  
    );
  }



  export default Ranks;
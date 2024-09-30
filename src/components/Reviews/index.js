import '../About.css';
import { Rate } from './StarRating';
import booksData from '../../data/booksData';
import InputLabel from '@mui/material/InputLabel';
const Review = ({ review }) => {
    const {
      title,
      url,
      author,
      num_comments,
      image,
      points,
    } = review;
  
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
            // value={searchTerm}
            // onChange={handleSearchChange}
          />
          <div className = "rateStyle">
            <Rate 
            starR = {points}
            >  
            </Rate>
          </div>
          <button id="reviewButton">Save</button>
        </div>
      </div>

      </div>
    );
  }

  export default Review;
import '../About.css';
import Rate from './StarRating';

const Review = ({ review }) => {
    const {
      title,
      url,
      author,
      num_comments,
      image,
    } = review;
  
    return (
      <div className="reviewBig">

        <div className='reviewTitle'>
        <span>
          <a>{title}</a>
          <br></br>
          <span>{author}</span>
          <Rate></Rate> 
        </span>
        </div>
        <div className = "rateStyle">

        </div>

        <img src={image} className='reviewImage'></img>
        <br></br>

        <br></br>
        <span>{num_comments}</span>
        <br></br>

      </div>
    );
  }

  export default Review;
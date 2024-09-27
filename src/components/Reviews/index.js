import '../About.css';
import Rate from './StarRating';

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
      <div className="reviewBig">
        <div>
          <img src={image} className='reviewImage'></img>
        </div>
        <div className='reviewTitle'>
          <div className='reviewTitle'>
            <p id='p-title'>{title}</p>
            <p>{author}</p>
          </div>
          <div className = "rateStyle">
            <Rate ></Rate>
          </div>
        </div>
      </div>
    );
  }

  export default Review;
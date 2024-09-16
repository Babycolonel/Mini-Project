import '../Home.css';
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
          <a href={url}>{title}</a>
          <br></br>
          <span>{author}</span>
          
        </span>
        </div>
        <Rate></Rate>
        <img src={image} className='bookImage'></img>
        <br></br>

        <br></br>
        <span>{num_comments}</span>
        <br></br>

      </div>
    );
  }

  export default Review;
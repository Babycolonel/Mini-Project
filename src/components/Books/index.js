import { Button } from '@mui/material';
import '../Home.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Story = ({ story, onArchive, onReview }) => {

  const navigate = useNavigate();

    const {
      title,
      url,
      author,
      num_comments,
      points,
      image,
      objectID,
    } = story;

    const handleClick = (id) => {
      onReview(id);
      // const reviewedBooks = JSON.parse(localStorage.getItem('reviewedBooks')) || [];
      // const isBookMarked = reviewedBooks.some(book => book.objectID === objectID)

      // reviewedBooks.push(story);
      // localStorage.setItem('reviewedBooks', JSON.stringify(reviewedBooks));
      navigate(`/about/${id}`);
    }

    const handleArchive = (id) => {
      //store archived book in localStorage
      const archivedBooks = JSON.parse(localStorage.getItem('archivedBooks')) || [];
      const isBookMarked = archivedBooks.some(book => book.objectID === objectID)
      if (!isBookMarked) {
        archivedBooks.push(story);
        localStorage.setItem('archivedBooks', JSON.stringify(archivedBooks));
        //call onArchive callback if needed
        if (onArchive) onArchive(id);
      }
      else {
        alert("Book is already added to bookmarks")
      }
    };
  
    /* layout of the UI when displaying the state from the store */
    return (
      <div className='homePageContainer' >
        <div className="story">
            <img src={image} className='bookImage' onClick={() => handleClick(objectID)}></img>
            <br></br>
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
            <a href={url}>Website</a>
            <ButtonInline onClick={() => handleArchive(objectID)}>
            ❤️
            </ButtonInline>
        </div>
      </div>
      </div>  
    );
  }

  /*Button as reusable component*/
  const ButtonInline = ({
    onClick,
    type = 'button',
    children
  }) =>
    <button id='bookMark'
      type={type}
      className="button-inline"
      onClick={onClick}
    >
      {children}
    </button>

  export default Story;
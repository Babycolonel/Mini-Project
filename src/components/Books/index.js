import { Button } from '@mui/material';
import '../Home.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Story = ({ story, onArchive }) => {

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
      console.log('work', id);
      //navigate('/about')
    }
  
    /* layout of the UI when displaying the state from the store */
    return (
      <div className='homePageContainer' onClick={() => handleClick(objectID)}>
        <div className="story">
            <img src={image} className='bookImage'></img>
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
            <ButtonInline onClick={() => onArchive(objectID)}>
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
import '../Home.css';

const Story = ({ story }) => {
    const {
      title,
      url,
      author,
      num_comments,
      points,
      image,
    } = story;
  
    return (
      <div className='homePageContainer'>
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
        </div>
      </div>
      </div>  
    );
  }

  export default Story;
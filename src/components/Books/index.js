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
      <div className="story">
        <img src={image} className='bookImage'></img>
        <br></br>
        <span>
          <a href={url}>{title}</a>
        </span>
        <br></br>
        <span>{author}</span>
        <br></br>
        <span>{num_comments}</span>
        <span>{points}</span>
      </div>
    );
  }

  export default Story;
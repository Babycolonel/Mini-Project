import "./BookMark.css";
import { connect } from 'react-redux';
import Book from "./Books/Book";
import { STORY_ARCHIVE } from "../constants/actionTypes";
import store from "../store";

const BookMark = ({ stories }) => {
    return (
        <>
        <head>
        <link rel="stylesheet" type="text/css" href="App.css"/>
        <script defer src='activePage.js'></script>
      </head> 
      <div id="bookmark">
        <div id="titleBackground">
          <div id="titleName">
            <p>BookMarked</p>
          </div>
          <div id="titleWords">
            <p>View your archived stories</p>
          </div>
        </div>
        <div className="headerBorder">
        <span className="BMheaderText">Browse</span>
        </div>
        <span className='flex-container'>
            {/* display archived stories how??? */}
            <Book stories={stories} />
        </span>
        </div>
        </>
    );
}


const mapStateToProps = state => ({
    stories: state,
  });
  
  const mapDispatchToProps = dispatch => ({
    // onArchive: id => dispatch(doArchiveStory(id)),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookMark);
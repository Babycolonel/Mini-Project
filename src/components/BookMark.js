import "./BookMark.css";
import { connect } from 'react-redux';
import Book from "./Books/Book";
import { DISPLAY_ARCHIVE, STORY_ARCHIVE } from "../constants/actionTypes";
import store from "../store";
import React, { useEffect, useState, createContext, useContext } from 'react';
import Story from "./Books";
import "./Home.css";

const BookMark = ({ stories }) => {
  const [archivedBooks, setArchivedBooks] = useState([]);

  useEffect(() => {
    //get archived books from localStorage
    const storedBooks = JSON.parse(localStorage.getItem('archivedBooks')) || [];
    setArchivedBooks(storedBooks);
  }, []);

    return (
        <>
        <head>
        <link rel="stylesheet" type="text/css" href="App.css"/>
        <script defer src='activePage.js'></script>
      </head> 
      <body /*onLoad={handleChange}*/>    
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
        {archivedBooks.map(book => (
          <Story
            key={book.objectID}
            story={book}
            // onArchive and onReview can be passed as needed
          />
        ))}
        </span>
        </div>
      </body>
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
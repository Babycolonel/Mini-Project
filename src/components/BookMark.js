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
  }, );

  const clearBookmarks = () => {
    // Clear bookmarks from local storage
    localStorage.removeItem('archivedBooks');
    setArchivedBooks([]);
  };

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
            <p>View your favourite stories here</p>
          </div>
        </div>
        <div className="headerBorder">
        <span className="BMheaderText">{archivedBooks.length} favourited</span>
        </div>
        <span className='flex-container'>
        {archivedBooks.map(book => (
          <Story
            key={book.objectID}
            story={book}
          />
        ))}
        </span>
        <button onClick={clearBookmarks}>CLEAR ALL BOOKMARKS</button>
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
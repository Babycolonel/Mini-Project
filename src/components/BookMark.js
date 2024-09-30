import "./BookMark.css";
import { connect } from 'react-redux';
import Book from "./Books/Book";
import { DISPLAY_ARCHIVE, STORY_ARCHIVE } from "../constants/actionTypes";
import store from "../store";
import React, { useEffect, useState, createContext, useContext } from 'react';
import Story from "./Books";
import "./Home.css";

import axios from "axios";

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

    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // Make a GET request to the Flask backend
      axios.get('http://localhost:7000/users')
        .then(response => {
          setUsers(response.data); // Update state with the user data
        })
        .catch(error => {
          console.error('There was an error fetching the users!', error);
        });
    }, []);

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
        <button id="clearButton" onClick={clearBookmarks}>CLEAR ALL BOOKMARKS</button>
        </div>
        <span className='flex-container'>
        {archivedBooks.map(book => (
          <Story
            key={book.objectID}
            story={book}
          />
        ))}
        </span>
        </div>
        {/* temp */}
        <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.id}: {user.username} {user.password} {user.created_at}</li>
          ))}
        </ul>
      </div>
      {/* temp */}
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
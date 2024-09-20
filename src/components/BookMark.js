import "./BookMark.css";
import { connect } from 'react-redux';
import Book from "./Books/Book";
import { DISPLAY_ARCHIVE, STORY_ARCHIVE } from "../constants/actionTypes";
import store from "../store";
import React, { useEffect, useState, createContext, useContext } from 'react';
import archiveStore from "../store/archiveindex";

const BookMark = ({ stories }) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        //  alert(event.target.value);
          setAge(event.target.value);
      console.log("IN BOOKMARK")
         // store.dispatch({ type: STORY_ARCHIVE, id })
        const Id  = event.target.value
        archiveStore.getState()
        };
    return (
        <>
        <head>
        <link rel="stylesheet" type="text/css" href="App.css"/>
        <script defer src='activePage.js'></script>
      </head> 
      <body onLoad={handleChange}>    
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
            {/* display archived stories */}
            <Book stories={stories} /> 
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
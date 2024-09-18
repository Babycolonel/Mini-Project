import ReactDOM from "react-dom/client"
import React, { useEffect, useState, createContext, useContext } from 'react';
import "./Home.css";
import "./About.css";
import "./Layout";
import Book from './Books/Book'; 
import { connect } from 'react-redux';
import store from "../store";
import { type } from "@testing-library/user-event/dist/type";
import { STORY_ARCHIVE } from '../constants/actionTypes';
import { getReadableStories } from '../selectors/story';

const Home = ({ stories, onArchive}) => {
  return (
    <>
      <head>
        <link rel="stylesheet" type="text/css" href="App.css"/>
        <script defer src='activePage.js'></script>
      </head> 
      <div id="home">
        <div id="titleBackground">
          <div id="titleName">
            <p>Le Book Navigator</p>
          </div>
          <div id="titleWords">
            <p>welcome to our website</p>
          </div>
        </div>
        <div className="headerBorder">
        <p className="headerText">Browse</p>
        </div>
        <span className='flex-container'>
          <Book stories={stories} onArchive={id => store.dispatch({type: STORY_ARCHIVE, id}) }/>
        </span>
        <br></br>
        <br></br>

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
)(Home);

//export default Home;

import ReactDOM from "react-dom/client"
import React, { useEffect, useState, createContext, useContext } from 'react';
import "./Home.css";
import "./About.css";
import "./Layout";
import Book from './Books/Book'; 
import { connect } from 'react-redux';

const Home = ({ stories, onArchive}) => {
  console.log(stories)

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
          <Book stories={stories} onArchive={onArchive}/>
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

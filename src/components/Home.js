import ReactDOM from "react-dom/client"
import React, { useEffect, useState, createContext, useContext } from 'react';
import "./Home.css";
import "./About.css";
import "./Layout";
import Book from './Books/Book'; 
import { fontSize } from "@mui/system";
import { Button } from "@mui/material";
import store from '../reducers/story';

const stories = [
  {
    image: 'https://cdn.kobo.com/book-images/00437f92-768a-4b3d-9f43-a1c2ac75816a/353/569/90/False/geronimo-stilton-and-the-kingdom-of-fantasy-2-the-quest-for-paradise.jpg',
    title: 'Geronimo Stilton',
    url: 'https://geronimostilton.com/',
    author: 'Elisabetta Maria Dami',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    image: 'https://m.media-amazon.com/images/I/81R2N4PRuUL._AC_UF1000,1000_QL80_.jpg',
    title: 'Diary of a Wimpy Kid',
    url: 'https://wimpykid.com/',
    author: 'Jeff Kinney',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }, {
    image: 'https://preview.redd.it/fgy14jrd3af41.jpg?auto=webp&s=4425fb0240637ce6bbeec7fdc49ce5d4718323f8',
    title: 'Dune',
    url: 'https://dunenovels.com/',
    author: 'Frank Herbet',
    num_comments: 2,
    points: 6,
    objectID: 2,
  }, {
    image: 'https://i.ebayimg.com/images/g/QTUAAOSwIOtbYt82/s-l1200.jpg',
    title: 'Twilight',
    url: 'https://stepheniemeyer.com/the-twilight-saga/',
    author: 'Stephenie Meyer',
    num_comments: 9,
    points: 8,
    objectID: 3,
  }, {
    image: 'https://m.media-amazon.com/images/I/91Gy28f5M0L._AC_UF1000,1000_QL80_.jpg',
    title: 'Boy In The Stripped',
    url: 'https://stepheniemeyer.com/the-twilight-saga/',
    author: 'Stephenie Meyer',
    num_comments: 9,
    points: 8,
    objectID: 4,
  }
];

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
          <Book stories={stories} onArchive={onArchive}/>
        </span>
        <br></br>
        <br></br>

      </div>
      </>
  );
}



export default Home;

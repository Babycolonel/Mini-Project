
 import ReactDOM from "react-dom/client"
 import React, { useEffect, useState, createContext, useContext } from 'react';
 import "./Home.css";
 import "./About.css";
 import "./Layout";
 import Book from './Books/Book'; 

const stories = [
  {
    image: 'https://cdn.kobo.com/book-images/00437f92-768a-4b3d-9f43-a1c2ac75816a/353/569/90/False/geronimo-stilton-and-the-kingdom-of-fantasy-2-the-quest-for-paradise.jpg',
    title: 'Geronimo Stilton',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    image: 'https://m.media-amazon.com/images/I/81R2N4PRuUL._AC_UF1000,1000_QL80_.jpg',
    title: 'Diary of a Wimpy Kid',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }, {
    image: '',
    title: 'Dune',
    url: 'https://github.com/reactjs/redux',
    author: 'Frank Herbet',
    num_comments: 2,
    points: 6,
    objectID: 2,
  }
];

const Home = () => {
  return (
    <>
      <head>
        <link rel="stylesheet" type="text/css" href="App.css"/>
        <script defer src='activePage.js'></script>
      </head> 
      <div id="home">
        <div id="titleBackground">
          <div id="titleName">
            <p>「✦ Book name thing ✦」</p>
          </div>
          <div id="titleWords">
            <p>welcome to our website</p>
          </div>
        </div>
          <div className='flex-container'>
          <Book stories={stories} />,
          </div>
          
      </div>
      </>
  );
}
export default Home;

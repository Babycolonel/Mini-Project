
 import ReactDOM from "react-dom/client"
 import React, { useEffect, useState, createContext, useContext } from 'react';
 import "./Home.css";
 import "./About.css";
 import "./Layout";
 import Book from './Books/Book'; 

const   stories = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
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

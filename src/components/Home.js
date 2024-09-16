
 import ReactDOM from "react-dom/client"
 import React, { useEffect, useState, createContext, useContext } from 'react';
 import "../Home.css";
 import "../About.css";
 import "./Layout";


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
              eee
          </div>
          
      </div>
      </>
  );
}
export default Home;

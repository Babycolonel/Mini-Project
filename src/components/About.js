import "./About.css";
import "./Home.css";

import React, { useEffect, useState, createContext, useContext } from 'react';

import "./Home.css";
import "./About.css";
import "./Layout";
import Review from "./Reviews/Review";
import Rate from "./Reviews/StarRating";

const reviews = [
 {
   image: 'https://cdn.kobo.com/book-images/00437f92-768a-4b3d-9f43-a1c2ac75816a/353/569/90/False/geronimo-stilton-and-the-kingdom-of-fantasy-2-the-quest-for-paradise.jpg',
   title: 'Geronimo Stilton',
   url: 'https://facebook.github.io/react/',
   author: 'Jordan Walker',
   num_comments: 3,

   objectID: 0,
 }
];

const About = () => {
 return (
   <>
     <head>
       <link rel="stylesheet" type="text/css" href="App.css"/>
       <script defer src='activePage.js'></script>
     </head> 
     <div id="home">
       <div id="titleBackground">
         <div id="titleName">
           <p>「✦ Book reviews ✦」</p>
         </div>
       </div>
         <div className='flex-container'>
         <Review reviews={reviews} />
         </div>
 
     </div>
     </>
 );
}
export default About;

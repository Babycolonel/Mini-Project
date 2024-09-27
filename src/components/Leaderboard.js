import "./Leaderboard";
import React, { useEffect, useState, createContext, useContext } from 'react';

import "./Home.css";
import "./About.css";
import "./Layout";
import Review from "./Reviews/Review";
import Rate from "./Reviews/StarRating";
import Book from './Books/Book'; 
import { REVIEW_BOOK, STORY_ARCHIVE } from '../constants/actionTypes';
import store from "../store";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import Ranks1 from "./Leaderboards/Ranks";
import booksData from "../data/booksData";

const Leaderboard = (stories) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //store the booksData in localStorage
    if (!localStorage.getItem('books')) {
      localStorage.setItem('books', JSON.stringify(booksData));
  }

  //retrieve books from localStorage and set state
  const localBooks = JSON.parse(localStorage.getItem('books'));
  setBooks(localBooks || []);
  console.log(localBooks + "djdjdd");
  //empty array dependency so it only runs once
  }, []);

  useEffect(() => {
    let allBooks = JSON.parse(localStorage.getItem('books'));

    const sortedBooks = allBooks.sort((a,b) => a.rank - b.rank);

    setBooks(sortedBooks);
  }, []);

   return (
     <>
       <head>
         <link rel="stylesheet" type="text/css" href="App.css"/>
         <script defer src='activePage.js'></script>
       </head>
  
       <div id="home">
       <div id="titleBackground">
       <div id="titleName">
             <p>Leaderboard</p>
         </div>
  
         </div>
         <div className="headerBorder">
          <p className="ABheaderText">Top books this month</p>
          </div>
           <div>
            <span className='flex-container'>
             <Ranks1 ranks={books}/>
             {console.log(books)};
            </span>

           </div>
   
       </div>
       </>
   );
  }
  
  const mapStateToProps = state => {
    console.log(state);
    return {
      rank: state,
    };
  }
  
  export default connect(
    mapStateToProps,
  )(Leaderboard);
  
import ReactDOM from "react-dom/client"
import React, { useEffect, useState, createContext, useContext } from 'react';
import "./Home.css";

import "./Layout";
import Book from './Books/Book'; 
import { connect } from 'react-redux';
import store from "../store";
import { type } from "@testing-library/user-event/dist/type";
import { REVIEW_BOOK, STORY_ARCHIVE } from '../constants/actionTypes';
import { getReadableStories } from '../selectors/story';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FILTER_GENRE } from "../constants/actionTypes";
import { Action } from "@remix-run/router";
import { SEARCH_BOOK } from "../constants/actionTypes";
import booksData from "../data/booksData";


const Home = ({ stories }) => {
  const [books, setBooks] = useState([]);
  const [age, setAge] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    //store the booksData in localStorage
    if (!localStorage.getItem('books')) {
      localStorage.setItem('books', JSON.stringify(booksData));
  }

  //retrieve books from localStorage and set state
  const localBooks = JSON.parse(localStorage.getItem('books'));
  setBooks(localBooks || []);
  //empty array dependency so it only runs once
  }, []);


  useEffect(() => {
    let filteredBooks = JSON.parse(localStorage.getItem('books'));

    //filter by genre if a specific genre is selected
    if (age !== '' && age !== 'All') {
      filteredBooks = filteredBooks.filter(book => book.genre === age);
    }

    //filter by search term
    //checks for both book title and author input
    if (searchTerm) {
      filteredBooks = filteredBooks.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
        || book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    //set filtered list
    setBooks(filteredBooks);
  }, [age, searchTerm]);

  const handleChange = (event) => {
    const genre = event.target.value;
    console.log("EVENT TARGET VALUE = " + event.target.value);
    setAge(genre);

    //filter by genre and update state
    //if filter "All" display all books in local storage
    if (genre === 'All'){
      console.log("IT IS ALL BOOKS");
      const allBooks = JSON.parse(localStorage.getItem('books'));
      setBooks(allBooks);
    }
    //else display normal filtered books based on genre
    else {
      const filteredBooks = JSON.parse(localStorage.getItem('books')).filter(book => book.genre === genre);
      setBooks(filteredBooks);
    }
  };
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

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
        <div className="dropDownContainer">
            <InputLabel id="dropDownLabel" >Genre</InputLabel>
            <Select 
              labelId="dropDownLabel"
              id="dropDown"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={'All'}>All</MenuItem>
              <MenuItem value={'Adventure'}>Adventure</MenuItem>
              <MenuItem value={'Children'}>Children</MenuItem>
              <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
              <MenuItem value={'Romance'}>Romance</MenuItem>
              <MenuItem value={'Literature'}>Literature</MenuItem>
            </Select>
            </div>
        <span className="headerText">Browse</span>
        <input
            type="text"
            id='searchBar'
            placeholder="Find a book for yourself!"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <span className='flex-container'>
          <Book stories={books} onArchive={id => store.dispatch({type: STORY_ARCHIVE, id})} onReview ={id => store.dispatch({type: REVIEW_BOOK, id}) }/>
        </span>

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

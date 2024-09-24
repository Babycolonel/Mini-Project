import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import "./About.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { SEARCH_BOOK } from "../constants/actionTypes";
import store from "../store";
import Home from "./Home.js";
import booksData from "../data/booksData";
import React, { useEffect, useState, createContext, useContext } from 'react';

// const InputCustom = React.memo((props) => {
//   console.log('render');
//   return (
//     <input onChange={props.onChange} value={props.value} type="text" id='searchBar' placeholder="Find a book for yourself!" />
//   )
// });

const Layout = ({ stories }) => {
  /*
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load search term from local storage on mount
  React.useEffect(() => {
    const storedSearchTerm = localStorage.getItem('searchTerm');
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
  }, []);

  const handleChange = (event) => {
    const title = event.target.value;
    console.log(title);
    setSearchTerm(title);
    
    // Store the search term in local storage
    localStorage.setItem('books', JSON.stringify(booksData))
    //store filteredSearch in localStorage
    const filteredSearch = JSON.parse(localStorage.getItem('books')) || [];
    //ensure archivedBooks is always an array even when returns empty/null
    if (!Array.isArray(filteredSearch)) {
      filteredSearch = [];
    }    

      filteredSearch = filteredSearch.filter(book =>
      searchTerm.toLowerCase().includes(book.title.toLowerCase()));
      setBooks(filteredSearch);
      console.log(filteredSearch);
      //find a way to pass filteredSearch to Books
  };

  // React.useEffect (() => {
  //   store.dispatch({ type: SEARCH_BOOK, title: input });
  // },[input]);
*/
    return(
      <>
        <nav>
            <li className='navHeight'>
              <div className='flex-container'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/bookmark">BookMark</Link>
                {/* <input
                  type="text"
                  id='searchBar'
                  placeholder="Find a book for yourself!"
                  //value={searchTerm}
                  //onChange={handleChange}
                /> */}
              </div>
            </li>
            
        </nav>
        <Outlet />
      </>
    )
};


export default React.memo(Layout);
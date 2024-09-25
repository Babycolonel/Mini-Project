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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

const [show, setShow] = useState(false);
const [password, setPassword] = useState('')

const handleClose = () => setShow(false); 
const handleShow = () => setShow(true);

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleCreateAccount = () => {
  //Criteria, 1 uppercase, 1 number, 1 symbol, >= 10 characters
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/;
  if (!passwordRegex.test(password)) {
    alert('Invalid password: 1 uppercase, 1 number, 1 symbol, and minimum 10 characters required.');
  } else {
    // Close the modal if password is valid
    alert('Account created successfully!');
    setShow(false);
  }
};

    return(
      <>
      {/* link makes pop up work but changes some layout, uncomment with caution */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
      {/* pop up when registering/loging in */}
        <Modal show={show} onHide={handleClose} className="modalContainer">
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>Username:</Modal.Body>
          <input placeholder="Name that will be seen by others."></input>
          <Modal.Body>Password:</Modal.Body>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="1 Caps, 1 Number, 1 Symbol, minimum 10 characters."></input>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCreateAccount}>
              Create Account
            </Button>
          </Modal.Footer>
        </Modal>
        <nav>
            <li className='navHeight'>
              <div className='flex-container'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/bookmark">BookMark</Link>
                <div className="navButtonContainer">
                  <button className="navButtons" onClick={handleShow}>Register</button>
                  <button className="navButtons">Log In</button>
                </div>
              </div>
            </li>
        </nav>
        <Outlet />
      </>
    )
};


export default React.memo(Layout);
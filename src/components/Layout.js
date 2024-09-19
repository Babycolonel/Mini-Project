import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import "./About.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { SEARCH_BOOK } from "../constants/actionTypes";
import store from "../store";

const Layout = ({ stories }) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    //  alert(event.target.value);
      setAge(event.target.value);
  
     // store.dispatch({ type: STORY_ARCHIVE, id })
    const titleInput  = document.getElementById("searchBar");
    const title = titleInput.value;
    console.log(title.value);
    store.dispatch({type: SEARCH_BOOK, title })
  };
    return(
      <>
        <nav>
            <li className='navHeight'>
              <div className='flex-container'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <form onSubmit={handleChange}>
                  <input type="text" id='searchBar' placeholder="Find a book for yourself!" />
                </form>
              </div>
            </li>
            
        </nav>
        <Outlet />
      </>
    )
};


export default Layout;
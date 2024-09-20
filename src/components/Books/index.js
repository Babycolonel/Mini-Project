import { Button } from '@mui/material';
import '../Home.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import archiveStore from '../../store/archiveindex';
import { DISPLAY_ARCHIVE } from '../../constants/actionTypes';
import { object } from 'prop-types';
import React, { useEffect, useState, createContext, useContext } from 'react';
const Story = ({ story, onArchive, onReview }) => {

  const navigate = useNavigate();

    const {
      title,
      url,
      author,
      num_comments,
      points,
      image,
      objectID,
    } = story;

    const handleClick = (id) => {
      navigate(`/about/${id}`);
      // onReview(id);
    }
    const [age, setAge] = React.useState('');

    const handleArchiveClick = (event) =>{
      onArchive(objectID)

  //  alert(event.target.value);
    setAge(event.target.value);

   // store.dispatch({ type: STORY_ARCHIVE, id })
      const  id = event.target.value
      console.log("ARCHIVED")
      archiveStore.dispatch({type: DISPLAY_ARCHIVE, id})
    }
  
    /* layout of the UI when displaying the state from the store */
    return (
      <div className='homePageContainer' >
        <div className="story">
            <img src={image} className='bookImage' onClick={() => handleClick(objectID)}></img>
            <br></br>
            <div className='homePageTitles'>
                <span>
                <a>{title}</a>
                </span>
                <br></br>
            </div>
        <div className='homePageText'>
            <span>{author}</span>
            <br></br>
            <span>{num_comments} comments</span>
            <br></br>
            <a href={url}>Website</a>
            <ButtonInline onClick={handleArchiveClick}>
            ❤️
            </ButtonInline>
        </div>
      </div>
      </div>  
    );
  }

  /*Button as reusable component*/
  const ButtonInline = ({
    onClick,
    type = 'button',
    children
  }) =>
    <button id='bookMark'
      type={type}
      className="button-inline"
      onClick={onClick}
    >
      {children}
    </button>

  export default Story;
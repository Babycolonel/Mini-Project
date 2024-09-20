import { FILTER_GENRE, STORY_ARCHIVE, SEARCH_BOOK, REVIEW_BOOK, DISPLAY_ARCHIVE } from '../constants/actionTypes';
import archiveStore from '../store/archiveindex';

const INITIAL_STATE = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Maze_Runner_cover.png',
        title: 'The Maze Runner',
        url: 'https://www.penguinrandomhouse.com/series/MZR/the-maze-runner-series/',
        author: 'James Dashner',
        num_comments: 15,
        points: 8,
        objectID: 5,
        genre: 'Adventure'
    }
];

const applyArchiveStory = (state, action) => { 
  console.log(action)
  //use this code for when implementing with actual API, filter code is right
  // newDataFilter = api.fetch("xxxx?q=${book.objectID}")
  // return newDateFilter;
  return state.filter((book) => {return action.id != book.objectID})
}

const applyFilterStory = (state, action) => { 
  console.log(action)
  return state.filter((book) => {return action.genre == book.genre})
}

const applySearchStory = (state, action) => { 
  console.log(action)
  /* toLowerCase() make it possible for lower case search */
  /* includes() make it possible for search with fewer words */
  return state.filter((book) => {return book.title.toLowerCase().includes(action.title.toLowerCase())})
}

const applyReviewStory = (state, action) => {
  console.log(action)
  return state.filter((book) => {return action.id === book.objectID})
}
  
const applyDisplayStory = (state, action) => {
  console.log(action)
  return state.filter((book) => {return action.id != book.objectID})
}

function archiveStoryReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case STORY_ARCHIVE: {
        return applyArchiveStory(state, action);
      }
      case FILTER_GENRE: {
        return applyFilterStory(state, action);
      }
      case SEARCH_BOOK: {
        return applySearchStory(state, action);
      }
      case REVIEW_BOOK: {
        return applyReviewStory(state, action);
      }
      case DISPLAY_ARCHIVE: {
        return applyDisplayStory(state, action);
      }
      default : return state;
    }
  }
  
  export default archiveStoryReducer;
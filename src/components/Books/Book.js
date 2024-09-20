import React from 'react';
import '../App.css';
import Story from '.';


const Book = ({ stories, onArchive, onDisplay }) =>
     <div className="stories" >
    {(stories || []).map(story =>
        <Story 
        key={story.objectID}
        story={story} 
        onArchive={onArchive}
        onDisplay={onDisplay}/>
    )}
  </div>

export default Book;
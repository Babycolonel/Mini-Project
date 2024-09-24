import React from 'react';
import '../App.css';
import Story from '.';


const Book = ({ stories, onArchive, onReview }) =>
  <div className="stories" >
    {(stories || []).map(story =>
      <Story 
        key={story.objectID}
        story={story} 
        onArchive={onArchive}
        onReview={onReview}
      />
    )}
  </div>

export default Book;
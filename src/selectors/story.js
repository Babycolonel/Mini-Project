const isNotArchived = archivedIds => story =>
    archivedIds.indexOf(story.objectID) === -1;
  
  const getReadableStories = ({ storyState, archiveState }) =>
    storyState.filter(isNotArchived(archiveState));
  // if (storyState == null){
  //   console.log('story state is null');
  // }
  
  export {
    getReadableStories,
  };
import { createStore } from 'redux';
import archiveStoryReducer from '../reducers/archiveStory';

const archiveStore = createStore(
  archiveStoryReducer
);

export default archiveStore;
import { combineReducers } from 'redux';
import storyReducer from './story';
import archiveReducer from './archive';
import filterReducer from './filter';

const rootReducer = combineReducers({
  storyState: storyReducer,
  archiveState: archiveReducer,
  filterState: filterReducer,
});

export default rootReducer;
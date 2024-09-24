import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import storyReducer from '../reducers/story';
import { thunk } from 'redux-thunk';

const preventDuplicateActionsMiddleware = (() => {
  let lastAction = null;  // Lưu trữ action cuối cùng được dispatch
  
  return (store) => (next) => (action) => {
    if (lastAction && lastAction.type === action.type && JSON.stringify(lastAction.payload) === JSON.stringify(action.payload)) {
      // Nếu action giống với action trước đó, không dispatch action nữa
      console.warn(`Action "${action.type}" bị chặn vì giống với action trước đó.`);
      return;
    }

    // Nếu action không trùng, cập nhật lastAction và tiếp tục dispatch
    lastAction = { type: action.type, payload: action.payload };
    return next(action);
  };
})();

const store = createStore(
  storyReducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    // window.devToolsExtension && window.devToolsExtension(),
  ),

  // applyMiddleware(thunk, () => console.log('check'), () => console.log('logger')),
);

export default store;
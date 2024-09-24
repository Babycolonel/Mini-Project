import { FETCH_REVIEW_BOOK } from "../action/review";

const INITIAL_STATE = {};

const fetchReviewBook = (state, action) => {
  console.log(action);
  const reviewedBook = JSON.parse(localStorage.getItem('reviewedBook')) || {};

  console.log(reviewedBook);
  if (reviewedBook?.objectID == action.id) {
    return reviewedBook;
  }

  return {};
}

function reviewReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_REVIEW_BOOK: {
      console.log(action);
      // return fetchReviewBook(state, action);

      return state;
    }

    default:
      return state;
  }
}

export default reviewReducer;
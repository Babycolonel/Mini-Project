export const FETCH_REVIEW_BOOK = 'FETCH_REVIEW_BOOK';

const fetchReviewBook = (reviewBook) => {
    console.log(reviewBook);
  return {
    type: FETCH_REVIEW_BOOK,
    reviewBook
  };
}

export function handleFetchReviewBook(bookId) {
  return dispatch => {
    const book = {};
    console.log(book);

    dispatch(fetchReviewBook(book));
  };
}

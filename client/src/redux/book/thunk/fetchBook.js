// import { loaded } from "../action";
// const fetchBook = async (dispatch) => {
//   const response = await fetch("https://bookshop-mu-woad.vercel.app/api/books");
//   const books = await response.json();
//   dispatch(loaded(books));
//   console.log(books);
// };
// export default fetchBook;


// new code 

// fetchBook.js
import { LOADING, LOADED } from "../actionType";

const fetchBook = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const res = await fetch("https://bookshop-mu-woad.vercel.app/api/books");
  const data = await res.json();
  dispatch({ type: LOADED, payload: data });
};

export default fetchBook;
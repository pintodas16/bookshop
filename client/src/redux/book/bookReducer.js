// import { LOADED, ADDED, DELETED, UPDATEBOOK } from "./actionType";
// import initialState from "./initialState";

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOADED:
//       return [...action.payload];

//     case ADDED:
//       return [...state, action.payload]; // ✅ MongoDB returns the full object with _id, no need to generate id manually

//     case DELETED:
//       return state.filter((book) => book._id !== action.payload); // ✅ _id not id

//     case UPDATEBOOK:
//       const { _id, name, author, thumbnail, price, rating, featured } =
//         action.payload; // ✅ _id not id
//       return state.map((book) => {
//         if (book._id === _id) { // ✅ _id not id
//           return {
//             ...book,
//             name,
//             author,
//             thumbnail,
//             price,
//             rating,
//             featured,
//           };
//         }
//         return book;
//       });

//     default:
//       return state;
//   }
// };

// export default bookReducer;


// new code 

// bookReducer.js
import { LOADING, LOADED, ADDED, DELETED, UPDATEBOOK } from "./actionType";

const initialState = {
  loading: false,
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case LOADED:
      return { loading: false, books: [...action.payload] };

    case ADDED:
      return { ...state, books: [...state.books, action.payload] };

    case DELETED:
      return { ...state, books: state.books.filter((b) => b._id !== action.payload) };

    case UPDATEBOOK:
      const { _id, name, author, thumbnail, price, rating, featured } = action.payload;
      return {
        ...state,
        books: state.books.map((book) =>
          book._id === _id ? { ...book, name, author, thumbnail, price, rating, featured } : book
        ),
      };

    default:
      return state;
  }
};

export default bookReducer;
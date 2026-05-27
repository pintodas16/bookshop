import { addedBook } from "../action";
const addBook = (books) => {
  return async (dispatch) => {
    const response = await fetch("https://bookshop-mu-woad.vercel.app/api/books", {
      method: "POST",
      body: JSON.stringify(books),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const book = await response.json();
    console.log(book);

    dispatch(addedBook(book));
  };
};

export default addBook;



import Book from "./Book";
import { useDispatch, useSelector } from "react-redux";
import fetchBook from "../redux/book/thunk/fetchBook";
import { useEffect } from "react";

function BookContainer({ searchTerm }) {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books); // ← destructure
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchBook()); // ← was missing ()
  }, [dispatch]);

  if (loading) return <div className="lws-bookContainer">Loading...</div>;
  if (!loading && books.length<=0) return <div className="lws-bookContainer">No books found! Please add one.</div>;
  return (
    <div className="lws-bookContainer">
      {books
        .filter((book) =>
          book.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        )
        .filter((book) => {
          const { featured } = filters;
          return featured === "featured" ? book.featured : true;
        })
        .map((book) => <Book book={book} key={book.id} />)}
    </div>
  );
}

export default BookContainer;
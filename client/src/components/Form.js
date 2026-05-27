import Input from "./Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../redux/book/thunk/addBook";
import updateBook from "../redux/book/thunk/updateBook";
import { offEdit } from "../redux/filter/action";
function Form() {
  const filters = useSelector((state) => state.filters);

  console.log(filters,'filters in form');
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [featured, setFeatured] = useState(false);
  const book = {
    name,
    author,
    thumbnail,
    price,
    rating,
    featured,
  };
  useEffect(() => {
    // tod fetch data when Edit button clicked
    if (filters.isEdit) {
      const { name, author, thumbnail, price, rating, featured } = filters.data;
      console.log(filters.data);
      setName(name);
      setAuthor(author);
      setThumbnail(thumbnail);
      setPrice(price);
      setRating(rating);
      setFeatured(featured);
    }
  }, [filters]);

  const handleFormReset = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };

  const handleFormSubmit = (e, isEdit) => {
    // check the book is edited or not
    if (isEdit) {
      e.preventDefault();
      book._id = filters.data._id;


      // console.log(book, filters.data , ' this is inside filter data and book in form');
      dispatch(updateBook(book));
      dispatch(offEdit());
      handleFormReset();
    } else {
      e.preventDefault();
      console.log(book);
      handleFormReset();
      dispatch(addBook(book));
    }
  };
  return (
    <form
      className="book-form"
      onSubmit={(e) => handleFormSubmit(e, filters.isEdit)}
    >
      <Input
        label="Book Name"
        required
        className="text-input"
        type="text"
        id="input-Bookname"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label="Author"
        required
        className="text-input"
        type="text"
        id="input-Bookauthor"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <Input
        label="Image Url"
        required
        className="text-input"
        type="text"
        id="input-Bookthumbnail"
        name="thumbnail"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-8 pb-4">
        <Input
          label="Price"
          required
          className="text-input"
          type="number"
          id="input-Bookprice"
          name="price"
          value={price}
          onChange={(e) => setPrice(Number.parseFloat(e.target.value))}
        />

        <Input
          label="Rating"
          required
          className="text-input"
          type="number"
          id="input-Bookrating"
          name="rating"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number.parseFloat(e.target.value))}
        />
      </div>

      <div className="flex items-center">
        <input
          id="input-Bookfeatured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={featured}
          onChange={(e) => setFeatured(!featured)}
        />
        <label for="featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button type="submit" className="submit" id="submit">
        {filters.isEdit ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}
export default Form;

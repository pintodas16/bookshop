import { updated } from "../action";

const updateBook = (data) => {
  console.log(data,'data in update book thunk');
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://bookshop-mu-woad.vercel.app/api/books/${data._id}`, // ✅ _id not id
        {
          method: "PUT", // ✅ use PUT, your backend route is PUT not PATCH
          body: JSON.stringify({
            name: data.name,
            author: data.author,
            featured: data.featured,
            price: data.price,
            rating: data.rating,
            thumbnail: data.thumbnail,
          }),
          headers: { "Content-Type": "application/json" }, // ✅ no space around ;
        }
      );
      const book = await response.json();
      dispatch(updated(book));
    } catch (err) {
      console.error("Update failed:", err);
    }
  };
};

export default updateBook;
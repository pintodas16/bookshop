import { deleted } from "../action";

const deleteBook = (id) => {
  return async (dispatch) => {
    await fetch(`https://bookshop-mu-woad.vercel.app/api/books/${id}`, {
      method: "DELETE",
    });
    dispatch(deleted(id));
  };
};
export default deleteBook;

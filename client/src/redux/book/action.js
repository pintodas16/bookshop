import { LOADED, ADDED, DELETED, UPDATEBOOK } from "./actionType";
export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const addedBook = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};
export const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};
export const updated = (book) => {
  return {
    type: UPDATEBOOK,
    payload: book,
  };
};

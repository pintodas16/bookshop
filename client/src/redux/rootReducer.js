import { combineReducers } from "redux";
import bookReducer from "./book/bookReducer";
import filterReducer from "./filter/filterReducer";
const rootReducer = combineReducers({
  books: bookReducer,
  filters: filterReducer,
});
export default rootReducer;

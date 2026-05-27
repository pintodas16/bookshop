import { ISEDIT, OFFEDIT, STATUSCHANGED } from "./actionType";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        featured: action.payload,
      };
    case ISEDIT:
      return {
        ...state,
        isEdit: true,
        data: action.payload,
      };
    case OFFEDIT:
      return {
        ...state,
        isEdit: false,
      };

    default:
      return state;
  }
};
export default filterReducer;

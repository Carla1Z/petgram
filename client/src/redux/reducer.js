import { GET_CATEGORIES, GET_PHOTOS, GET_USERS } from "./type";

const initialState = {
  categories: [],
  photos: [],
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
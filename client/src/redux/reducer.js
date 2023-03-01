import { PRUEBA } from "./type";

const initialState = {
  prueba: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRUEBA:
      return {
        ...state,
        prueba: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

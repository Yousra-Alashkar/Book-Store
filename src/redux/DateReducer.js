import { RETURN_DATE } from "./actionType";

const initialState = {
  Date: null,
};

export default function DateReducer(state = initialState , action) {
  switch (action.type) {
    case RETURN_DATE:
      return { 
        ...state,
         Date: [action.payload] };


    default:
      return state;
  }
}

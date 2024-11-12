import { ADD_PERSONAL } from "./actionType";

const initialState = {
  personal: [],
};

export default function personalReducer(state = initialState , action) {
  switch (action.type) {
    case ADD_PERSONAL:
      return { 
        ...state,
         personal: [...state.personal, action.payload] };


    default:
      return state;
  }
}

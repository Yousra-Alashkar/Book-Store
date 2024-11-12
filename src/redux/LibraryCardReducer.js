import { ADD_LIBRARY_DATA } from "./actionType";

const initialState = {
  LibraryData: [],
};

export default function LibraryDataReducer(state = initialState , action) {
  switch (action.type) {
    case ADD_LIBRARY_DATA:
      return { 
        ...state,
         LibraryData: [...state.LibraryData, action.payload] };


    default:
      return state;
  }
}

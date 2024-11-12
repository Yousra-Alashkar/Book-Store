import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import personalReducer from "./personalReducer";
import LibraryDataReducer from "./LibraryCardReducer";
import DateReducer from "./DateReducer";

const rootReducer = combineReducers({
    cart : cartReducer,
    personal :personalReducer,
    LibraryData :LibraryDataReducer,
    Date :DateReducer,
})
export default rootReducer;
import { ADD_TO_CART, REMOVE_BOOK, COUNT_ITEMES ,ADD_PERSONAL, 
   ADD_LIBRARY_DATA ,RETURN_DATE ,CLEAR_TABLE_DATA} from "./actionType";

export const addToCart = (book) => ({
  type: ADD_TO_CART,
  payload: book,
});


export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,
});

export const countItems = (book) => ({
  type : COUNT_ITEMES,
  payload: book,
})

export const addPersonal = (Personal) => ({
  type : ADD_PERSONAL,
  payload: Personal,
})

export const addLibraryData = (LibraryData) => ({
  type : ADD_LIBRARY_DATA,
  payload: LibraryData,
})

export const returnDate = (date) => ({
  type : RETURN_DATE,
  payload: date,
})

export const clearTableData  = () => ({
  type : CLEAR_TABLE_DATA,
})
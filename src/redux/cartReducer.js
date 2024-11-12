import { ADD_TO_CART, COUNT_ITEMES, REMOVE_BOOK , CLEAR_TABLE_DATA} from "./actionType";

const initialState = {
  cartItems: [],
  count:0,
};

export default function cartReducer(state = initialState , action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { 
        ...state,
         cartItems: [...state.cartItems, action.payload] };
  
         
    case REMOVE_BOOK:
      return {
        ...state,
        cartItems: state.cartItems.filter((_el, index) => {
          return index !== action.payload;
        }),
      };


      case COUNT_ITEMES:
      return { 
        ...state,
         count: state.cartItems.map((_el) => {
          return initialState.count+1;
          })
        };

        
        case CLEAR_TABLE_DATA:
          return { 
            ...state,
             cartItems: [] ,count:0};
      


    default:
      return state;
  }
}

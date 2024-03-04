import { createContext, useReducer, useContext } from 'react'

export const ContextData = createContext();

const initialState = {
 token:"",
 foodData:[],
 favourites:[],
 cartData:[],
 totalAmt:0,
 user:null,
 role:"user",
 hamburger:false,
 recommended:[],
}


const reducers = (state, action) => {

  switch (action.type) {
    
      case "SET_CART_DATA":
        return {
          ...state,
          cartData: action.cartData,
        };
        case "SET_FAVOURITES":
        return {
          ...state,
          favourites:action.favourites,
        };
      case "SET_RECOMMENDED":
        return {
          ...state,
         recommended: action.recommended,
        };
      case "SET_HAMBURGER":
        return {
          ...state,
          hamburger: action.hamburger,
        };
      
      case "SET_FOOD_DATA":
      return {
        ...state,
        foodData:action.foodData,
      };

      case "SET_TOTAL_AMOUNT":
        return {
          ...state,
       totalAmt:action.totalAmt
       };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
    default:
      return state;
  }

};

export const useStateValues = () => useContext(ContextData);

export function NewContextProvider({ children }) {

  return (<ContextData.Provider value={useReducer(reducers, initialState )} >
    {children}
  </ContextData.Provider>
  )
}

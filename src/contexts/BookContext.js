import { useReducer, createContext } from "react";


export const BookContext = createContext();

const initialState = {
  booking: [],
  totalAmount: 0
}

const bookReducer = (state, action) =>{
  const { type, payload } = action

  switch(type){
      case "LOGIN_SUCCESS":
          return {
            ...state,
              isLogin: true,
              user: payload
          }
      case "LOGOUT":
          return {
            ...state,
              isLogin: false,
              user: {},
              
          }

      default:
          throw new Error();
  }
}
 
export const BookContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}


import { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer, initialState } from "./cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || initialState;

  const [state, dispatch] = useReducer(cartReducer, savedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

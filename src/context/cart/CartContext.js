import { createContext, useContext } from "react";

export const CartStateContext = createContext(null);
export const CartActionsContext = createContext(null);

export const useCart = () => useContext(CartStateContext);
export const useCartActions = () => useContext(CartActionsContext);

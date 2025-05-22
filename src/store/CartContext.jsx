import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartContextProvider() {
  return <CartContext.Provider></CartContext.Provider>;
}

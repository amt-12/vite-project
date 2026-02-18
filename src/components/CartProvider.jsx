
import { createContext, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  const cart = "goodsdsdsdVibes";


  const [husband, setWife] = useState();


  const addToCart =(item)=>{
    console.log("add to cart",item);
    setWife(item)
  }
  return (
    <CartContext.Provider value={{ cart,addToCart,husband }}>
    {children}
    </CartContext.Provider>
  );
};
export default CardProvider;


import { createContext, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  const cart = "goodsdsdsdVibes";


  const [husband, setWife] = useState(100);

  const [authenticated, setAuthenticated] = useState(
    ()=>{
      const token = localStorage.getItem("jwtToken")
      return token ;
    }
  );

console.log("authenticated",authenticated)
  const addToCart =(item)=>{
    console.log("add to cart",item);
    setWife(item)
  }
  return (
    <CartContext.Provider value={{ cart,addToCart,husband,authenticated }}>
    {children}
    </CartContext.Provider>
  );
};
export default CardProvider;

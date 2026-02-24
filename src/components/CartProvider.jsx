
import { createContext, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  const cart = "goodsdsdsdVibes";


  const [husband, setWife] = useState("");

const [jwtToekn,setJwtToken] = useState(
  ()=>{
    const token = localStorage.getItem("token");
    if(token){
      return token;
    }
    return null;
  }
)
console.log("jwt token",jwtToekn);

  const addToCart =(item)=>{
    console.log("add to cart",item);
    setWife(item)
  }
  return (
    <CartContext.Provider value={{ cart,addToCart,husband,jwtToekn }}>
    {children}
    </CartContext.Provider>
  );
};
export default CardProvider;

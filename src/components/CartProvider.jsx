
import { createContext, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  const cart = "goodsdsdsdVibes";


  const [husband, setWife] = useState("");
  const [role,setRole] = useState(()=>{
    const role = localStorage.getItem("role");
    if(role){
      return role;
    }
    return null;
  })

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
    <CartContext.Provider value={{ cart,addToCart,husband,jwtToekn,setRole,role }}>
    {children}
    </CartContext.Provider>
  );
};
export default CardProvider;

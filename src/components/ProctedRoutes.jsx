import React, { useContext } from 'react'
import { CartContext } from './CartProvider';
import Users from '../Pages/Users';
import { Navigate } from 'react-router';



const ProctedRoutes = ({children}) => {
  const {authenticated}=useContext(CartContext);

console.log("procted routes me authenticated",authenticated)
if (!authenticated) {
    return authenticated ? children : <Navigate to="/login" replace />
  }

  return children;
  
}

export default ProctedRoutes
import React, { useContext } from "react";
import { Children } from "react";
import { Navigate } from "react-router";
import { CartContext } from "./CartProvider";

const ProtectedRoutes = ({ children }) => {
const {jwtToekn} =useContext(CartContext);


  if (jwtToekn) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoutes;

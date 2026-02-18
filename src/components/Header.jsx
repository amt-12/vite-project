import React, { useContext } from 'react'
import { CartContext } from './CartProvider';

const Header = () => {
  const {husband}=useContext(CartContext);

  return (
    <div className='border h-[100px]'>Header
    
    
    <p>{husband}</p>
    </div>
  )
}

export default Header
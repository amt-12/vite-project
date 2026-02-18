import React, { useContext } from 'react'
import { CartContext } from './components/CartProvider';

const App = () => {
  const {cart,addToCart}=useContext(CartContext);
const item = "csd"
  return (
    <div>
    <button className='bg-[red]' onClick={()=>addToCart(item)}>good</button>
    <p>{cart}</p>
    </div>
  )
}

export default App
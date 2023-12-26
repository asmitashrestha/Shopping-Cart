import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  // gives updated state
  const cart = useSelector(state=> state)
  console.log(cart);
  return (
    <div>
      cart
    </div>
  )
}

export default Cart

import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from "../store/slices/cart-slice";

const ProductList = ({ item }) => {
const dispatch = useDispatch()
const {cart} = useSelector(state => state)

  const handleAddToCart = ()=>{
    dispatch(addToCart(item))
  }
  const handleRemoveFromCart = ()=>{
    dispatch(removeFromCart(item.id))
  }
  return (
    <div className="product-box">
      <div className="img-container">
        <img src={item.image} alt="" />
      </div>
      <div className="product-details">
       <p>{item.title}</p> 
      </div>
      <div className="add-cart">
      <p>Rs.{item.price}</p>
      <button onClick={cart.some(items => items.id === item.id ) ? handleRemoveFromCart
        : handleAddToCart}>
        {
          cart.some(items => items.id === item.id ) ?"Remove from cart"
          :"Add to cart"
        }
      </button>
      </div>
    </div>
  );
};

export default ProductList;

import React from "react";
import {useDispatch} from 'react-redux'
import { addToCart } from "../store/slices/cart-slice";

const ProductList = ({ item }) => {
const dispatch = useDispatch()

  const handleAddToCart = ()=>{
    dispatch(addToCart(item))
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
      <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductList;

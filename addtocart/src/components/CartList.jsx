import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

const CartList = ({ cartitem }) => {
  const dispatch = useDispatch()
  const handleRemoveFromCart = () =>{
      dispatch(removeFromCart(cartitem.id))
  }
  return (
    <div className="cart-container">
      <div className="cart-box">
        <div className="img-container">
          <img src={cartitem.image} alt="" />
        </div>
        <div className="cart-details">
          <p>{cartitem.title}</p>
          <p>Rs.{cartitem.price}</p>
          <p>⭐{cartitem.rating.rate}</p>
          <button className="remove-btn" onClick={handleRemoveFromCart}>Remove from cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;

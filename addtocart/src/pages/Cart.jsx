import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartList from "../components/CartList";


const Cart = () => {
  // gives updated state
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div>
      {cart && cart.length ? (
        cart.map((cartitem, index) => (
          <CartList key={index} cartitem={cartitem} />
        ))
      ) : (
        <div className="cart-header">
          <h1>No data added to cart</h1>
          <Link to="/">
            <button className="shop-btn">Shop Now</button>
          </Link>{" "}
        </div>
      )}

      <div className="cart-price">
        <div className="cart-list">
          <h2>Your cart summary</h2>
          <p>Number of products : {cart.length}</p>
          <p>Total amount : {totalCart}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

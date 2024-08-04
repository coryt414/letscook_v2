import React from 'react';
import { useEffect, useState, useContext } from 'react';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex
    })
  }
}


const Cart = () => {
  return (
    <div>
      <h1>Cart Page</h1>
      <p>Your ingredients here!</p>
    </div>
  );
};

export default Cart;
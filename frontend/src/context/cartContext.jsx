import React, { createContext, useState } from 'react'
import { products } from '../constants';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for(let i=1; i< products.length + 1; i++){
    cart[i] = 0;
  }
  return cart;
}

const cartContext = (props) => {

  const [cartItem, setCartItem] = useState(getDefaultCart());
  

  const addToCart = (productId) => {
    setCartItem((prev) => ({...prev, [productId]: prev[productId] + 1 }))
  }

  const removeFromCart = (productId) => {
    setCartItem((prev) => ({...prev, [productId]: prev[productId] - 1 }))
  }

  const trashFromCart = (productId) => {
    setCartItem((prev) => ({...prev, [productId]: 0}))
  }

  const ContextValue = {cartItem, addToCart, removeFromCart, trashFromCart};

  console.log(cartItem)
  return (
    <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>

  )
}

export default cartContext

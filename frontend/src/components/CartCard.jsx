import React, { useState, useContext } from 'react'
import { products } from '../constants'
import { ShopContext } from '../context/cartContext';
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const CartCard = ({cart, quantity}) => {

  const {cartItem, addToCart, removeFromCart, trashFromCart} = useContext(ShopContext);


  /*const [itemQuantity, setItemQuantity] = useState(cartItem[cart.id]);
  function incrementQuantity(){
   // setItemQuantity(prev => prev + 1)
   setItemQuantity(prev => prev += 1);
  }*/

  console.log(cartItem[cart.id]);


  return (
    <div className='flex gap-7 relative '>
        <Link className='w-36' to={`../menu/products/${cart.id}`}>
            <img src={cart.img} alt="" className='rounded-md' />
        </Link>
        <div>
          <Link to={`../menu/products/${cart.id}`}>
            <p className='text-2xl'>{cart.name}</p>
          </Link>
          <div className='mt-7'>
            <p className='text-xl mb-4'>${cart.price}</p>
            <div className='flex gap-3 border w-20 px-2 justify-between rounded-xl items-center'>
              <button onClick={() => removeFromCart(cart.id)}>-</button>
              <p>{cartItem[cart.id]}</p>
              <button onClick={() => addToCart(cart.id)}>+</button>
            </div>
          </div>  
            
        </div>
        <div className='absolute right-0 top-[40%] hover:opacity-60 hover:cursor-pointer'>
          <button onClick={() => trashFromCart(cart.id)}>
            <FaRegTrashCan size={20} color='red'></FaRegTrashCan>
          </button>
          
        </div>
    </div>
  )
}

export default CartCard

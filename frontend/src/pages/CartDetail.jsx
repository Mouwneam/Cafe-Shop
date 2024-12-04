import React, {useContext, useState} from 'react'
import { Footer, Header, PreFooter } from '../sections'
import NavBar from '../components/NavBar'
import { ShopContext } from '../context/cartContext'
import { products } from '../constants'
import CartCard from '../components/CartCard'

const CartDetail = () => {

  const {cartItem} = useContext(ShopContext);
  let cartQuantity = 0;
  
 
  let subtotal = 0;
  

  products.map((product) =>{
    if(cartItem[product.id] !==0 ){
      subtotal += cartItem[product.id] * product.price;
      return subtotal;
      
    }
  })

  const tax = subtotal * 0.05;
  
  let total = tax + subtotal;

  

  for(const [key, value] of Object.entries(cartItem)){
    cartQuantity +=  value;
  }
  let cartQuantityText = `Cart (${cartQuantity})`;

  return (
    <section className='bg-gray-100'>

      <Header></Header>
      <NavBar></NavBar>

      <div className='flex flex-row gap-7  mt-8 px-10 xl:mx-32 max-lg:flex-col'>
        <div className='w-[800px] max-lg:w-full'>
          <div className='text-3xl font-semibold mb-10 bg-white p-4 rounded-md'>
            {cartQuantityText}
          </div>
          <div className='flex flex-col gap-10 bg-white p-4 rounded-md'>
            {products.map((product) =>{
              if(cartItem[product.id] !==0 ){
                return <CartCard cart={product} quantity={cartItem[product.id]} key={product.id}></CartCard>
                
              }
            })}
          </div>
        </div>
        <div className='bg-white p-10 rounded-md w-[30%] h-[300px] max-lg:w-[400px] '>
            <p className='text-3xl font-semibold'>Summary</p>
            <div className='mt-5 text-lg flex flex-col gap-3'>
              <div className='flex  justify-between'>
                <div>Subtotal: </div>
                <div>${subtotal}</div>
              </div>

              <div className='flex justify-between'>
                <div>Tax:</div>
                <div>${tax.toFixed(2)}</div>
              </div>

              <div className='flex justify-between font-semibold'>
                <div>Total:</div>
                <div>${total.toFixed(2)}</div>
              </div>
              
            </div>

            <div className='flex justify-center items-center mt-5'>
              <button className='bg-yellow-500 text-white px-20 py-1 text-lg font-semibold
              rounded-xl hover:opacity-80 hover:duration-500'>
                Checkout
              </button>
            </div>
            
        </div>
      </div>

      <PreFooter></PreFooter>
      <section className="bg-black pb-8 sm:px-16 px-8 sm:pt-24 pt-12  mt-20">
            <Footer></Footer>
      </section>

    </section>
  )
}

export default CartDetail

import React, { useState, useContext } from 'react'
import { navLinks } from '../constants'
import cartImg from '../assets/icons/whiteCart.png';
import hamburgerwhite from '../assets/icons/hamburgerwhite.png';
import { Link, Outlet } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { ShopContext } from '../context/cartContext';


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {cartItem} = useContext(ShopContext);
  let cartQuantity = 0

  for(const [key, value] of Object.entries(cartItem)){
    cartQuantity +=  value;
  }

  function toggleNavBar(){
    setIsOpen(!isOpen)
  }



  return (
    <section className='pt-8 bg-black pb-6 relative'>
      <nav className='flex flex-row justify-between text-xl font-Palanquin mx-4
      px-7 items-center'>
        <a href="#" className='font-bold text-yellow-400 text-2xl'>
          Ranni De Cafe
        </a>
        <ul className='flex flex-row gap-9 max-md:hidden'>
          {navLinks.map((link) => (
            <li 
              key={link.label} 
              className='hover:text-yellow-500 transition 
              duration-0 hover:duration-500 text-white'>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        
        

        <div className='relative flex flex-row gap-8'>
          <button className='hidden max-md:flex flex-row-reverse 
          hover:bg-yellow-600 p-2 rounded-xl active:bg-yellow-700'
          onClick={toggleNavBar}
          >
            {isOpen  ? <GiCancel color='white' size={24}></GiCancel> :
             
             (<img 
              src={hamburgerwhite} 
              alt="hamburger"
              height={24}
              width={24} 
            />)}
            
          </button>
          <Link className='' to="/cart">
            <img height={40} width={40} src={cartImg} alt="" />
          </Link>
          <p className='absolute top-[-10px] right-[1px] text-white
          bg-yellow-500 px-[7px] text-sm rounded-xl py-[1px]'>
            {cartQuantity}
          </p>
          
        </div>

        <div className='absolute  top-[90px] left-0 z-10 hidden
        max-md:flex w-full bg-white transform transition-transform shadow-md'
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
        >
          {isOpen ? (
            <ul className='flex-1 flex-col justify-center items-center 
            gap-4'>
            {navLinks.map((link) => (
              <li key={link.label} className='font-montserrat text-md 
              leading-10 hover:bg-yellow-500 hover:text-white w-full
              transition-all text-center'> 
                <Link to={link.href} className=''>{link.label}</Link>
              </li>
            ))}
            </ul>
          ) : ''}
        </div>
      </nav>
    </section>
  )
}

export default NavBar

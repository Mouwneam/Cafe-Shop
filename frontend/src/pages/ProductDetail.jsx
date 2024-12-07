import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Header, PreFooter, Footer} from '../sections';
import NavBar from '../components/NavBar';
import { products } from '../constants';
import { ShopContext } from '../context/cartContext';

const ProductDetail = () => {

  const {addToCart} = useContext(ShopContext)
  const params = useParams();

  let prod = products.filter((product) => 
    product.id == params.productId * 1
  )

  console.log();
    
  return (
    <section>
      <Header></Header>
      <NavBar></NavBar>

      <div className='flex flex-row  mt-20 gap-10 justify-center'>
        <div className='w-[300px] '>
          <img src={prod[0].img} alt="" />
        </div>
        <div className='w-[500px]'>
          <h5 className='text-3xl font-semibold my-10 border-b-[1px] border-gray-300 pb-2'>
            {prod[0].name}
          </h5>
          <p className='text-2xl'>
            ${prod[0].price}
          </p>
          <p className='my-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
          <div className='flex flex-row max-sm:flex-col gap-4'>
            <button className='bg-yellow-400 py-2 px-4 text-white text-lg w-36 hover:bg-yellow-500 hover:duration-500'
            onClick={() => addToCart(prod[0].id)}>
              Add to Cart
            </button>
            <button className=' bg-yellow-600 py-2 px-4 text-white text-lg w-36 hover:opacity-80 hover:duration-500'>
              Buy Now 
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

export default ProductDetail

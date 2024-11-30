//import {addToCart} from "../constants/cart";
import {ShopContext} from "../context/cartContext"
import { useContext } from "react"

const ProductCard = (props) => {

  const { addToCart, removeFromCart} = useContext(ShopContext);

  return (
    <div className="flex flex-col group" >
        <div className="relative">
            <img src={props.data.img} alt="" 
                className=""/>
            <button className="hidden group-hover:block bg-black text-white w-full 
            p-3 absolute bottom-0 hover:bg-yellow-500 hover:duration-500"
            onClick={() => addToCart(props.data.id)}>
                Add To Cart
            </button>
        </div>
        
        <div className="flex flex-col items-center mt-5 font-semibold">
            <p className="text-xl text-center">
                {props.data.name}
            </p>
            <p>
                ${props.data.price}
            </p>
        </div>
    </div>
  )
}

export default ProductCard

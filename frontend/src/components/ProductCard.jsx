//import {addToCart} from "../constants/cart";
import {ShopContext} from "../context/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom";

const ProductCard = (props) => {

  const { addToCart} = useContext(ShopContext);

  return (
    <div className="flex flex-col group" >
        <div className="relative">
            <Link to={`products/${props.data.id}`}>
                <img src={props.data.img} alt="" 
                    className=""/>
            </Link>
            <button className="hidden group-hover:block bg-black text-white w-full 
            p-3 absolute bottom-0 hover:bg-yellow-500 hover:duration-500"
            onClick={() => addToCart(props.data.id)}>
                Add To Cart
            </button>
        </div>
        
        <div className="flex flex-col items-center mt-5 font-semibold">
            <Link to={`products/${props.data.id}`} className="text-xl text-center hover:text-yellow-500 hover:duration-300">
                {props.data.name}
            </Link>
            <p>
                ${props.data.price}
            </p>
        </div>
    </div>
  )
}

export default ProductCard

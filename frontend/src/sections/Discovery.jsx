import { menuCategory, menuList, products } from "../constants";
import { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "../components/ProductCard";


const Discovery = () => {

  let [menu, setMenu] = useState(0);

  const [productsItem, setProductsItem] = useState(null);

  useEffect(() => {
      setProductsItem(productsItem => products)
  }, [])

  function handleMenu(index){
    setMenu(index);
  }

  const autoBanner = true;
  const autoBannerInterval = 10000;
  
  
  function showNextBanner(){
    setMenu(index =>{
      if(index === menuList.length -1) return 0
      return index + 1;
    })
  }

  function showPrevBanner(){
    setMenu(index =>{
      if(index === 0) return menuList.length - 1;
      return index -1;
    })
  }

  useEffect(() => {
    if(!autoBanner) return
    const bannerInterval = setInterval(showNextBanner, autoBannerInterval);
    return () => clearInterval(bannerInterval);
  }, [])


  return (
    <section>
        <section className="mt-20 relative ">
            <div className="flex flex-col justify-center items-center">
              <p className="text-gray-500">
                  DISCOVER
              </p>
              <h4 className="text-black text-4xl font-bold">
                  OUR BEST DISHES    
              </h4>      
              <div className="mt-8 flex gap-6">
                {menuCategory.map((menuData, index) => (
                  <button key={index} onClick={() => {handleMenu(index)}}
                  className={`${menuData.toLowerCase() == menuList[menu].title ? 'underline underline-offset-4 ' : ''}`}
                  >
                    {menuData}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <MenuItem data={menuList[menu]}></MenuItem>
            </div>

            <button className="absolute top-[60%] max-sm:left-[-30px] max-xl:left-6 left-24 rounded-full hover:bg-slate-200"
            onClick={showPrevBanner}>
              <IoIosArrowBack size={30}></IoIosArrowBack>
            </button>
            <button className="absolute top-[60%] max-sm:right-[-30px] max-xl:right-6 right-24 rounded-full hover:bg-slate-200"
            onClick={showNextBanner}>
              <IoIosArrowForward size={30}></IoIosArrowForward>
            </button>

        </section>

        <h4 className="text-4xl font-palanquin font-bold text-center m-20">
            Products
        </h4>
      
        <div className="grid gap-10 grid-cols-4 m-20 max-lg:grid-cols-3">
              {products.map((productItem) => (
                  <ProductCard data={productItem} key={productItem.id}></ProductCard>
              ))}
        </div>
    </section>
    
  )
}

export default Discovery

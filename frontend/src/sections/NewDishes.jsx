import { useEffect, useState } from "react"
import Carousel from "../components/Carousel"
import { bannerInfo } from "../constants"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NewDishes = () => {

  const autoBanner = true;
  const autoBannerInterval = 6000;
  const [bannerIndex, setBannerIndex] = useState(0);
  
  function showNextBanner(){
    setBannerIndex(index =>{
      if(index === bannerInfo.length -1) return 0
      return index + 1;
    })
  }

  function showPrevBanner(){
    setBannerIndex(index =>{
      if(index === 0) return bannerInfo.length - 1;
      return index -1;
    })
  }

  useEffect(() => {
    if(!autoBanner) return
    const bannerInterval = setInterval(showNextBanner, autoBannerInterval);
    return () => clearInterval(bannerInterval);
  }, [])


  return (
    <section className=" w-full mt-28 h-screen max-md:mb-[400px]">
      <div className="flex flex-col justify-center items-center">
        <h6 className="text-slate-500 text-lg">NEW DISHES</h6>
        <h5 className="text-4xl font-bold">
          WHAT'S NEW IN MENU?
        </h5>
      </div>
      <div className="mt-16  relative ">
        <div className="flex duration-500
        " >
          {/*{bannerInfo.map((info) => (
            <Carousel key={info.title} {...info}></Carousel>
          ))}*/}
          <Carousel info={bannerInfo[bannerIndex]}></Carousel>
          
        </div>
        <button className="absolute top-[50%] left-[-30px] rounded-full hover:bg-slate-200"
        onClick={showPrevBanner}>
          <IoIosArrowBack size={30}></IoIosArrowBack>
        </button>
        <button className="absolute top-[50%] right-[-30px] rounded-full hover:bg-slate-200"
        onClick={showNextBanner}>
          <IoIosArrowForward size={30}></IoIosArrowForward>
        </button>
      </div>
      
      
    </section>
  )
}

export default NewDishes

import NavBar from "../components/NavBar";
import interior from '../assets/img/interior.png';
const HeadExplore = () => {
  return (
    <section className="flex items-center justify-center
    w-full relative h-screen flex-col">
      {/*<div className="h-screen bg- bg-cafe-interior bg-cover bg-center 
      bg-no-repeat relative  ">
          <NavBar></NavBar>
          <div className="text-white absolute top-[50%] left-[40%] font-mono
          text-4xl font-extrabold filter-none">
            Expect the best
          </div>
      </div> */}
      <img 
        src={interior} 
        alt="banner"
        className="h-screen w-full object-cover
        absolute mix-blend-overlay brightness-[.35]"  
      />
      <div className="absolute w-full top-0">
       <NavBar></NavBar>
      </div>
      

      <div className="block">
        <p className="text-white  font-mono text-4xl font-extrabold">
          Expect the best 
        </p>
      </div>
      <button className="bg-white py-3 px-5 mt-3 w-15 cursor-pointer 
      z-20 hover:bg-yellow-500 hover:text-white hover:duration-500">
          START EXPLORING
      </button>
      
      
    </section>
  )
}

export default HeadExplore

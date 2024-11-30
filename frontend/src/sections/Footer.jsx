import { IoLocationOutline, IoGlobeOutline } from "react-icons/io5";
import { getInTouch, workHour } from "../constants";
import { BsTelephone } from "react-icons/bs";
import location from "../assets/img/location.png";

const Footer = () => {

  

  return (
    <section className="text-white flex flex-row max-xl:gap-12 xl:gap-32 
    justify-center pb-24 font-montserrat max-lg:flex-col ">
      <div className="">
        <h5 className="pb-8 text-2xl font-semibold">
            OUR RESTAURANT
        </h5>
        <div className="flex flex-col gap-3 text-gray-400">
            <div className="flex items-center gap-3">
                <div>
                    <IoLocationOutline/> 
                </div>
                <p>
                    Choam Chao, Phnom Penh
                </p>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <BsTelephone/> 
                </div>
                <p>
                    +855 164 899 99
                </p>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <IoGlobeOutline/> 
                </div>
                <p>
                    rannidecafe@website.com
                </p>
            </div>
        </div>
      </div>

      <div className="flex flex-row max-xl:gap-5 xl:gap-32 max-lg:gap-20 
      max-[850px]:flex-col">
        <div >
            <h5 className="pb-8 text-2xl font-semibold">
                OPENING HOURS
            </h5>
            <div className="text-gray-400">
                {workHour.map((hour) => (
                    <p key={hour.date}>{hour.date}</p>
                ))}
            </div>
        </div>

        <div>
            <h5 className="pb-8 text-2xl font-semibold">
                LOCATION
            </h5>
            <div className="w-64 max-lg:w-80">
                <img src={location} alt="" />
            </div>
        </div>
      </div>
      

    </section>
  )
}

export default Footer

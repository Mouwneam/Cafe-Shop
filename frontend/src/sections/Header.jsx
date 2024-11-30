import { socialMedia } from "../constants"

const Header = () => {
  return (
    <header className="flex flex-row px-5 py-6 text-gray-500 
    justify-between max-sm:justify-end bg-white">
        <div className="font-montserrat text-md max-sm:hidden flex flex-row gap-2">
            <p>
                ADDRESS: Choam Chao, Phnom Penh (Cambodia) |
            </p>
            <p className="max-md:hidden">
                MON-SUN: 8:00 AM - 9:00 PM 
            </p>
        </div>
        <div className="flex flex-row gap-2 ">
            {socialMedia.map((logo) => (
                <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    key={logo.alt} 
                    className="hover:bg-yellow-500 rounded-lg p-1 cursor-pointer"/>
            ))}
        </div>
    </header>
  )
}

export default Header

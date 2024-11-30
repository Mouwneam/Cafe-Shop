import NavBar from "../components/NavBar";
import {Footer, Header, ContactForm} from "../sections";
import { locations, navLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section>
        <Header></Header>
        <NavBar></NavBar>
        
        <section className="mt-40">
            <ContactForm></ContactForm>
        </section>

        <section className="flex justify-center items-center gap-20 mt-48
        font-palanquin mb-24 max-md:flex-col ">
            {locations.map((location) => (
              <div key={location.name} className="flex flex-col items-center justify-between">
                <p className="font-semibold mb-4 text-xl">
                    {location.name}
                </p>
                <p>{location.detail}</p>
                <p>{location.website}</p>
                <p>{location.tel}</p>
              </div>
            ))}
        </section>

        <section className="mt-20 border-t-2 pt-20">
            <h2 className="text-center text-4xl font-semibold">
              <Link to="/"><span className="text-yellow-500">Ranni</span> De Cafe</Link>
              
            </h2>
            <div className="flex justify-center gap-10 my-5 ">
                {navLinks.map((link) => (
                    <Link key={link.label} to={link.href} 
                    className="hover:text-yellow-500 
                    hover:duration-500 font-semibold">
                      {link.label}
                    </Link>
                ))}
            </div>
            <div className="flex justify-center">
                <p className="xl:w-[60%] md:w-[700px] sm:w-[500px] text-center">
                  Stylish and fashionable restaurant with exquisite dishes from different worlds, stylish interiors will make your mood real and impressive.
                </p>
            </div>
            <div className="flex flex-row justify-center my-8 gap-2 ">
                {socialMedia.map((logo) => (
                    <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        key={logo.alt} 
                        className="hover:bg-yellow-500 rounded-lg p-1 cursor-pointer"/>
                ))}
            </div>
            <p className="text-center">
                Copyright &#169; 2024 Spyropress. All rights reserved
            </p>
          </section>
        <section className="bg-black pb-8 sm:px-16 px-8 sm:pt-24 pt-12  mt-20">
            <Footer></Footer>
        </section>
        
    </section>
  )
}
export default ContactUs

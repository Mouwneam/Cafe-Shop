import NavBar from "../components/NavBar";
import {Footer, Header, ContactForm, PreFooter} from "../sections";
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

        <PreFooter></PreFooter>

        <section className="bg-black pb-8 sm:px-16 px-8 sm:pt-24 pt-12  mt-20">
            <Footer></Footer>
        </section>
        
    </section>
  )
}
export default ContactUs

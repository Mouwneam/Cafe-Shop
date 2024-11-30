import NavBar from "../components/NavBar";
import {Footer, Header, Discovery} from "../sections";

const Menu = () => {
  return (
    <section className="relative">
        
        <section className="fixed top-0 left-0 right-0 z-10">
            <Header></Header>
            <NavBar></NavBar>
        </section>
        
        <section className="mt-80">
            <Discovery></Discovery>
        </section>
        
        <section className="bg-black pb-8 sm:px-16 px-8 sm:pt-24 pt-12  mt-20">
            <Footer></Footer>
        </section>
        
    </section>
  )
}

export default Menu

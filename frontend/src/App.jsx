import './index.css';
import { Header, HeadExplore, AboutUs, Services, NewDishes, BestChoice, OurChef, Footer } from './sections';
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  return(
    <main className='relative'>

      <section>
        <Header/>
      </section>

      <section>
        <HeadExplore></HeadExplore>
      </section>
        
      <section>
        <AboutUs></AboutUs>
      </section>

      <section>
        <Services></Services>
      </section>

      <section className='sm:px-16 px-8 lg:px-40'>
        <NewDishes></NewDishes>
      </section>

      <section>
        <BestChoice></BestChoice>
      </section>

      <section>
        <OurChef></OurChef>
      </section>

      <section className='bg-black pb-8 sm:px-16 px-8 sm:pt-24 pt-12  mt-20'>
        <Footer></Footer>
      </section>

    </main>
  )
}

export default App

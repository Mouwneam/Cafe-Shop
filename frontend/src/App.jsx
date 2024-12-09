import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import Home from "./pages/Home";
import Menu from './pages/Menu.jsx';
import ContactUs from './pages/ContactUs.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import  CartContext  from './context/cartContext.jsx';
import CartDetail from './pages/CartDetail.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      errorElement: <NotFoundPage/>
    },
    {
      path: '/menu',
      element: <Menu></Menu>
    },
    {
      path: "/contact-us",
      element: <ContactUs></ContactUs>,
    },
    {
      path: "/cart",
      element: <CartDetail></CartDetail>
    },
    {
      path: "menu/products/:productId",
      element: <ProductDetail></ProductDetail>
    }
  ]);
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

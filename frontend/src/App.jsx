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
], {basename: "/Cafe-Shop/frontend"});
  return(
    <main className='relative'>

      <RouterProvider router={router} >

      </RouterProvider>

    </main>
  )
}

export default App

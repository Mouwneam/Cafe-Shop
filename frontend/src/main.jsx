import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from "./pages/Home";
import Menu from './pages/Menu.jsx';
import ContactUs from './pages/ContactUs.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import  CartContext  from './context/cartContext.jsx';
import CartDetail from './pages/CartDetail.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

/*const router = createBrowserRouter([
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
 put in strict mode
<RouterProvider router={router}></RouterProvider>
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
      <App></App>
    </CartContext>
  </StrictMode>,
)

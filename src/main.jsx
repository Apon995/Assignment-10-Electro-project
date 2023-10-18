import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AddProduct from './Components/AddProduct.jsx'
import NotFound from './Components/NotFound.jsx'
import Mycart from './Components/Mycart.jsx';
import Home from './Components/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Components/Shop.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';

const router = createBrowserRouter([
  {

    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Shop',
        element: <Shop />
      },
      {
        path: '/Addproducts',
        element: <AddProduct />
      },
      {
        path: '/Mycart',
        element: <Mycart />
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/About',
        element: <About/>
      }
    ]

  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

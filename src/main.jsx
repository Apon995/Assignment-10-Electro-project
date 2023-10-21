import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AddProduct from './Components/AddProduct.jsx'
import NotFound from './Components/NotFound.jsx'
import Mycart from './Components/Mycart.jsx';
import Home from './Components/Home.jsx';
import Shop from './Components/Shop.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
import Update from './Components/Update.jsx';
import Provider from './ContextHooks/Provider.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {

    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: '/Shop',
        element: <Shop />
      },
      {
        path: '/Addproducts',
        element: <PrivateRoute><AddProduct /></PrivateRoute>
      },
      {
        path: '/Mycart',
        element: <Mycart />,

      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({ params }) => fetch(`https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/products/${params.id}`)
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Register',
        element: <Register />
      }
    ]

  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AddProduct from './Components/AddProduct.jsx'
import NotFound from './Components/NotFound.jsx'
import Mycart from './Components/Mycart.jsx';
import Home from './Components/Home.jsx';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {

    path : '/',
    element : <App/>,
    errorElement : <NotFound/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/AddProducts',
        element : <AddProduct/>
      },
      {
        path : '/Mycart',
        element : <Mycart/>
      }
    ]

  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

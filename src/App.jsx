import React from 'react'
import Footer from './Components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar';
import './index.css'

function App() {
  return (
    <>

      <header>
        <Navbar />
      </header>
      <main >
        < Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>




    </>
  )
}

export default App
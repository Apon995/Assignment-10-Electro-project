import React from 'react'
import Footer from './Components/Footer.jsx'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from './Components/Navbar';
import './index.css'
import { Oval } from 'react-loader-spinner';

function App() {

  const navigation = useNavigation()

  console.log(navigation?.state)
  return (
    <>

      <header>
        <Navbar />
      </header>
      <br />
      <br />
      <main >
        {
          navigation?.state == 'idle' ? < Outlet /> : <div className='flex items-center justify-center w-full h-[60vh]'>
            <Oval
              height={80}
              width={80}
              color="black"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#adadad"
              strokeWidth={5}
              strokeWidthSecondary={4}

            />
          </div>


        }

      </main>
      <footer>
        <Footer />
      </footer>





    </>
  )
}

export default App
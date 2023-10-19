import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

function Footer() {
  return (
    <>
    <hr />
      <div className='w-full px-[5%] bg-[#ffffff] text-[#636363] py-9 footer md:text-start text-center ' >
        <div className=' flex md:flex-row flex-col items-center justify-between py-9'>
          {/* --footer-1st-col-- */}
          <div >
            <div className='flex items-center '>
              <img src={Logo} alt="" className='w-[70px] h-[60px] bg-inherit' />
              <h1 className=' font-medium text-3xl text-black'>Electro</h1>

            </div>
            <div>
              <p className='text-sm font-medium'>Our company is the best Electronices <br />
                products seller,very famous shop in the city,<br />
                we try to our best for customers.</p>
            </div>

            <div id='socialicons' className='flex items-center gap-4 pt-4 socialIcons md:justify-start justify-center'>
              <div>
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          {/* --footer-2nd-col-- */}
          <div className='md:block hidden'>
            <h1 className='pb-4 font-medium text-2xl text-black'>Quick Links</h1>
            <div>
              <ul className=' text-base font-normal space-y-1 footerLinks '>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/About' >About us</Link></li>
                <li><Link to='/Contact' >Contact us</Link></li>
                <li><Link to='/Shop' >Shop</Link></li>
                <li><Link to='/Addproducts' >Addproducts</Link></li>
              </ul>
            </div>
          </div>

          {/* --foter-3rd-col-- */}
          <div className='lg:block hidden'>
            <h1 className='pb-4 font-medium text-2xl text-black'>Our Top products</h1>

            <ul className='text-base font-normal space-y-1 footerLinks ' >
              <li><Link to='/'>Computers</Link></li>
              <li><Link to='/'>Phones</Link> </li>
              <li><Link to='/'>Mobile accosories</Link></li>
              <li><Link to='/'>smart Tv</Link></li>
              <li><Link to='/'>Air conditions</Link></li>

            </ul>
          </div>

          {/* --footer-4th-col-- */}
          <div className='md:block hidden'>
            <h1 className='pb-4 font-medium text-2xl text-black'>Contact info </h1>

            <div>
              <ul className='text-base font-normal space-y-1'>
                <li>celenden park , Mirpur city 2005</li>
                <li>Allah karim square in Bangladesh.</li>
                <li>Hotline : +9990003</li>
                <li>ElectroOfficial@gmail.com</li>

              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className='pt-4'>
          <p>Copyright &copy; Electro Electronices and technology company. All rights reserved</p>

        </div>



      </div>




    </>
  )
}

export default Footer
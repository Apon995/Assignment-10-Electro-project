import React from 'react';
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>

            <nav className='flex w-full items-center justify-between py-2 px-[5%] bg-[#fafafa]'>
                <div className='flex items-center '>
                    <img src={Logo} alt="" className='w-[70px] h-[60px] bg-inherit' />
                    <h1 className='text-2xl font-medium text-black'>electro</h1>
                </div>
                <div>
                    <ul className='flex items-center gap-3 ' id='navUl'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Shop'>Shop</NavLink></li>
                        <li><NavLink to='/About'>About us</NavLink></li>
                        <li><NavLink to='/Addproducts'>Addproduct</NavLink></li>
                        <li><NavLink to='/Mycart'>My cart</NavLink></li>
                        <li><NavLink to='/Contact'>Contact us</NavLink></li>
                    </ul>
                </div>
                <div>
                    <div className='flex items-center gap-2 '>
                        <i className="fa-solid fa-right-to-bracket text-2xl"></i>
                        <button className='bg-[#2742fd] px-3 py-2 font-normal rounded-md text-white'>Log in</button>
                    </div>
                    {/* <div className='flex items-center gap-2'>
                        <i class="fa-solid fa-right-from-bracket text-2xl"></i>
                        <button className='bg-[#2742fd] px-3 py-2 font-normal rounded-md text-white'>Log out</button>
                    </div> */}
                </div>
            </nav>

        </>
    )
}

export default Navbar
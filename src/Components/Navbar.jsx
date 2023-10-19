import React from 'react';
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div >

            <nav className='flex w-full items-center justify-between py-2 px-[5%] bg-[#fafafa]'>
                <div className='flex items-center '>
                    <img src={Logo} alt="" className='w-[70px] h-[60px] bg-inherit' />
                    <h1 className='text-2xl font-medium text-black'>electro</h1>
                </div>
                <div>
                    <ul className='flex items-center gap-3  ' id='navUl'>
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

            <div className='w-full bg-[#2742fd] px-[5%] flex items-center justify-between top-0 sticky'>

                <div className='flex items-center gap-2 text-[#ffffff] py-6 '>
                    <i className="fa-solid fa-square-caret-down"></i>
                    <h1 className='font-normal text-base cursor-pointer '>All categories</h1>
                </div>

                <div className='flex border-[1px] h-[45px] w-[29rem] rounded-md'>
                    <input type="text" name="search" id="search" placeholder='search products by name' className='w-[85%] px-2 rounded-l-sm outline-none border-none text-base font-normal' />
                    <button className='w-[15%] bg-[#fafafa] rounded-r-sm text-xl hover:text-[#2742fd]'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className='flex items-center gap-2  text-[#ffffff] cursor-pointer'>
                <i className="fa-solid fa-cart-shopping text-2xl"></i>
                <h1 className='text-base font-medium'>Cart</h1>

                    
                    

                </div>

            </div>

        </div>
    )
}

export default Navbar
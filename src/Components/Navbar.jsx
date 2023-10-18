import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div>
                <nav className='flex w-full items-center justify-between'>
                    <h1>Electro</h1>
                    <div>
                        <ul className='flex items-center gap-3'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/Shop'>Shop</NavLink></li>
                            <li><NavLink to='/'>About us</NavLink></li>
                            <li><NavLink to='/Addproducts'>Addproduct</NavLink></li>
                            <li><NavLink to='/Mycart'>My cart</NavLink></li>
                            <li><NavLink to='/'>Contact us</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
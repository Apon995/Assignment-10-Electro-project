import React, { useContext, useState } from 'react';
import Logo from '../assets/Logo.png'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { globalContext } from '../ContextHooks/Provider';
import PropTypes from 'prop-types';


function Navbar({ currentLocation }) {

    const { user, Logout } = useContext(globalContext);
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate();



    const handleLogout = () => {
        Logout()
            .then(response => {
                console.log(response)
            })
            .then(error => {
                console.log(error)
            })
    }

    const hanldeToggleMenu = () => {
        setMenu(!menu)

        if(!menu){
            console.log('sttti')

            document.getElementById('NavLinkdiv').classList.remove('left-[-610px]')
            document.getElementById('NavLinkdiv').classList.add('left-0')
            document.getElementById('NavloginDiv').classList.remove('left-[-185px]')
            document.getElementById('NavloginDiv').classList.add('left-[90px]')
        }
        else{
           
            document.getElementById('NavLinkdiv').classList.remove('left-0')
            document.getElementById('NavLinkdiv').classList.add('left-[-610px]')
            
            document.getElementById('NavloginDiv').classList.remove('left-[90px]')
            document.getElementById('NavloginDiv').classList.add('left-[-185px]')
        }
    }

    return (
        <div >

            <nav className='flex w-full items-center justify-between py-2 lg:px-[5%] md:px-[1%] px-[3%] bg-[#fafafa] '>
                <div className='flex items-center '>
                    <img src={Logo} alt="logo" className='md:w-[70px] w-[40px] md:h-[60px] bg-inherit' />
                    <h1 className='text-2xl font-medium text-black'>electro</h1>
                </div>


                <div className='md:hidden block'>
                    <button onClick={hanldeToggleMenu} className='text-xl' >
                        {
                            menu ? <i className="fa-solid fa-xmark"></i> :
                                <i className="fa-solid fa-bars "></i>
                        }
                    </button>
                </div>



                <div id='NavLinkdiv' className='md:static absolute duration-700 top-[55px] left-[-610px] md:py-0 py-2 bg-[#2742fd] md:h-fit h-[245px] md:bg-inherit w-full md:w-fit md:text-inherit text-[#ffffff] z-[99] md:z-0'>
                    <ul className='flex items-center md:gap-3 gap-2 md:flex-row flex-col  ' id='navUl'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Shop'>Shop</NavLink></li>
                        <li><NavLink to='/About'>About us</NavLink></li>
                        <li><NavLink to='/Addproducts'>Addproduct</NavLink></li>
                        {user && <li><NavLink to='/Mycart'>My cart</NavLink></li>}
                        <li><NavLink to='/Contact'>Contact us</NavLink></li>
                    </ul>
                </div>


                <div  id='NavloginDiv' className='md:static duration-700 absolute top-[250px] left-[-185px] z-[99] md:z-0 '>


                    {
                        user ? <div className='flex items-center gap-2'>
                            <i className="fa-solid fa-right-from-bracket text-2xl md:text-inherit text-white"></i>
                            <button onClick={handleLogout} className='bg-[#2742fd] px-3 md:border-none border-[1px] border-black py-2 font-normal rounded-md text-white'>Log out</button>
                        </div> : <div className='flex items-center gap-2 '>
                            <i className="fa-solid fa-right-to-bracket text-2xl md:text-inherit text-white"></i>
                            <button onClick={() => navigate('/Login')} className='bg-[#2742fd] px-3 py-2 md:border-none border-[1px] border-black font-normal rounded-md text-white'>Log in</button>
                        </div>
                    }


                </div>
            </nav>

            {/* ----search-bar--- */}
            <div >
                {
                     currentLocation == 'Shop' ? <div className='w-full h-[65px] bg-[#2742fd] lg:px-[5%] md:px-[2%] px-[3%] flex items-center justify-between '>

                        <div className='md:flex items-center gap-2 text-[#ffffff] py-6 hidden '>


                            <select name="categories" className='bg-inherit border-none outline-none cursor-pointer'>
                                <option className='text-[#2742fd] cursor-pointer' value="">All categories</option>
                                <option className='text-[#2742fd] cursor-pointer' value="sony">Sony</option>
                                <option className='text-[#2742fd] cursor-pointer' value="Apple">Apple</option>
                                <option className='text-[#2742fd] cursor-pointer' value="Samsung">Samsung</option>
                                <option className='text-[#2742fd] cursor-pointer' value="Google">Google</option>
                                <option className='text-[#2742fd] cursor-pointer' value="Intel">Intel</option>
                                <option className='text-[#2742fd] cursor-pointer' value="LG">LG</option>
                                <option className='text-[#2742fd] cursor-pointer' value="Kelvin">Kelvin</option>
                            </select>

                        </div>

                        <div className='flex border-[1px] h-[45px] w-[29rem] rounded-md'>
                            <input type="text" name="search" id="search" placeholder='search products by name' className='w-[85%] px-2 rounded-l-sm outline-none border-none text-base font-normal' />
                            <button className='w-[15%] bg-[#fafafa] rounded-r-sm text-xl hover:text-[#2742fd]'><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>

                        {
                            user ? <Link to='/Mycart' className='md:flex hidden items-center gap-2  text-[#ffffff] cursor-pointer'>
                                <i className="fa-solid fa-cart-shopping text-2xl"></i>
                                <h1 className='text-base font-medium'>Cart</h1>




                            </Link> : <div></div>
                        }



                    </div> : ''
                }

            </div>


        </div>
    )
}

Navbar.propTypes = {

    currentLocation: PropTypes.string



}
export default Navbar
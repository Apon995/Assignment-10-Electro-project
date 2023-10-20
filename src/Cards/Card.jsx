import React from 'react'
import { Link } from 'react-router-dom';

function Card({data}) {

    const {product_Image ,product_type , short_description} = data || {}
    return (
        <>
            <div className='border-[1px] bestSale-box border-[#ededed] rounded-md w-full hover:cursor-pointer'>
                <div className='bg-[#fafafa] rounded-md  flex flex-row-reverse items-center py-9 px-3'>
                    <img src={product_Image} alt="watch" className='w-[190px] mx-auto' />
                    <div className='space-y-2'>
                        <h1 className='text-[#252525] text-3xl font-medium'>{product_type || "watch"} </h1>
                        <p className='text-base text-[#636363] font-normal w-[300px] '>{short_description || ''} <br />
                           </p>
                        <br />
                        <Link to="/Shop" className='bg-[#2742fd] px-6 py-3 rounded-md text-white hover:text-[#252525] duration-500  border-[2px] border-[#2742fd] hover:bg-inherit hover:text-normal  font-medium'>Shop now</Link>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Card
import React from 'react'
import Watch from '../assets/Watch.webp'

function ShopCard({ product }) {

    const { product_Image, brand_Name, product_type, price } = product || {};



    return (
        <>

            <div className='border-[1px] border-[#ededed] rounded-md  py-2 px-2 hover:cursor-pointer'>

                <div className='bg-[#fafafa] py-2 rounded-md space-y-3'>
                    <img src={product_Image} alt="watch" className='w-[170px] h-[160px] mx-auto' />
                </div>

                <div className='px-1 space-y-1 text-[#252525]'>
                    <h1 className='text-xl text-[#252525] font-semibold'>{product_type || 'watch'}</h1>
                    <div >
                        <i className="fa-solid fa-star text-[#ffe234] "></i>
                        <i className="fa-solid fa-star text-[#ffe234] "></i>
                        <i className="fa-solid fa-star text-[#ffe234] "></i>
                        <i className="fa-solid fa-star " ></i>
                        <i className="fa-solid fa-star  " ></i>
                        <i className="fa-solid fa-star  " ></i>

                    </div>

                    <p className='text-[#252525] text-base font-normal'>Brand : {brand_Name ||'apple'}</p>
                    <p className='text-[#252525] text-base font-normal'>Price : ${price || '000'}</p>



                    <div className='flex gap-3 pt-3'>
                        <button className="text-base font-normal bg-[#ededed] px-4 rounded-md py-2 hover:bg-[#2742fd] hover:text-white duration-300"> Add to cart <i className="fa-solid fa-cart-shopping text-base"></i></button>
                        <button className="text-base font-normal bg-[#ededed] px-4 rounded-md py-2 hover:bg-[#2742fd] hover:text-white duration-300"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default ShopCard
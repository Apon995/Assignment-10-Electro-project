import React from 'react'


function TopSellCard({data}) {
    const {product_Image, product_type} = data || {}

    console.log(product_Image)
    return (
        <>
            <div className='border-[1px] bestSale-box border-[#ededed] rounded-md w-[250px] py-2 px-2 hover:cursor-pointer'>
                <div className='bg-[#fafafa] py-2 rounded-md space-y-3'>
                    <img src={product_Image} alt="watch" className='w-[170px] h-[150px] mx-auto' />
                    <p className='text-center text-[#252525] font-medium'>{product_type}</p>
                </div>
            </div>





        </>
    )
}

export default TopSellCard
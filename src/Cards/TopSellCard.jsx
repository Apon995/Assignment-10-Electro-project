import React from 'react'
import PropTypes from 'prop-types';


function TopSellCard({ data }) {
    const { product_Image, product_type } = data || {}

    return (
        <>
            <div className='border-[1px] bestSale-box border-[#ededed] rounded-md py-2 px-2 hover:cursor-pointer'>
                <div className='bg-[#fafafa] py-2 rounded-md space-y-3'>
                    <img src={product_Image} alt="watch" className='w-[170px] h-[150px] mx-auto' />
                    <p className='text-center text-[#252525] font-medium'>{product_type}</p>
                </div>
            </div>





        </>
    )
}

TopSellCard.propTypes = {

    data: PropTypes.object.isRequired,



}
export default TopSellCard
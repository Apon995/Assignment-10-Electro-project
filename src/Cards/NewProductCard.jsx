import React from 'react';
import PropTypes from 'prop-types';



function NewProductCard({ data, HandleAddtoCart }) {
    const { _id, product_Image, product_Name, short_description } = data || {}
    return (
        <>

            <div className='border-[1px] bg-[#fafafa] bestSale-box border-[#ededed] w-full rounded-md  hover:cursor-pointer'>
                <div className=' rounded-md  flex gap-2 xl:flex-row-reverse flex-col items-center py-4 px-3'>
                    <img src={product_Image} alt="watch" className='w-[140px] h-[120px] ' />
                    <div className='space-y-2'>
                        <h1 className='text-[#252525] text-3xl font-medium'>{product_Name || "computer"} </h1>
                        <p className='text-base text-[#636363] font-normal  '>{short_description || ''}<br />
                        </p>
                        <div className='flex gap-3 pt-3'>
                            <button onClick={() => HandleAddtoCart(_id)} className="text-base font-normal bg-[#ededed] px-4 rounded-md py-2 hover:bg-[#2742fd] hover:text-white duration-300"> Add to cart <i className="fa-solid fa-cart-shopping text-base"></i></button>
                            <button className="text-base font-normal bg-[#ededed] px-4 rounded-md py-2 hover:bg-[#2742fd] hover:text-white duration-300"><i className="fa-regular fa-heart"></i></button>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}
NewProductCard.propTypes = {

    data: PropTypes.object.isRequired,
    HandleAddtoCart: PropTypes.func


}
export default NewProductCard
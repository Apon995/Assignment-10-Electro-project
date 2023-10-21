import React, { useContext, useState } from 'react'
import { globalContext } from '../ContextHooks/Provider'
import PropTypes from 'prop-types';

function CartItemCard({ buyProduct }) {

    const { HandleDeletetoCart } = useContext(globalContext)

    const { _id, product_Image, product_Name, price } = buyProduct || {}

    const [num, setNum] = useState(0)
    return (
        <>

            <div className='flex py-2 md:gap-2 md:flex-row flex-col gap-5 border-b-2'>

                <div>
                    <img
                        src={product_Image}
                        alt={product_Name}
                        className=" rounded-md md:w-[150px] w-full my-auto"
                    />
                </div>

                <div className='w-full flex flex-col gap-7'>

                    <div className='flex items-center justify-between  '>
                        <p className='text-[#000] font-medium text-[22px] '>{product_Name} </p>
                        <button onClick={() => { HandleDeletetoCart(_id) }} className="text-base font-normal bg-[#ededed] px-2 rounded-md py-2 hover:bg-[#2742fd] hover:text-white duration-300"><i className="fa-solid fa-trash-can"></i></button>
                    </div>

                    <div className='flex items-center justify-between'>

                        <div>
                            <p className='text-[#838383] text-base'>unit price : ${price}</p>
                            <div className=' flex gap-3 border-[1px] w-fit px-3 py-2 border-[#2742fd] rounded-md font-semibold '>
                                <button onClick={() => setNum(num + 1)}><i className="fa-solid fa-plus"></i></button>
                                <span>{num}</span>

                                <button onClick={() => setNum(num - 1)}><i className="fa-solid fa-minus"></i></button>
                            </div>
                        </div>
                        <h1 className='text-base text-[#000] font-medium '>Total : ${price}</h1>

                    </div>
                </div>
            </div>

































        </>
    )
}

CartItemCard.propTypes = {

    buyProduct : PropTypes.object.isRequired

}
export default CartItemCard
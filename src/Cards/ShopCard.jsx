import React from 'react'
import Watch from '../assets/Watch.webp'

function ShopCard() {


    const handleRatingOne = () => {

        document.getElementById('ratingOne').classList.toggle('text-[#ffe234]')

    }
    const handleRatingTwo = () => {

        document.getElementById('ratingTwo').classList.toggle('text-[#ffe234]')

    }
    const handleRatingThree = () => {

        document.getElementById('ratingThree').classList.toggle('text-[#ffe234]')

    }
    const handleRatingFour = () => {

        document.getElementById('ratingFour').classList.toggle('text-[#ffe234]')

    }
    const handleRatingFive = () => {

        document.getElementById('ratingFive').classList.toggle('text-[#ffe234]')

    }
    const handleRatingSix = () => {

        document.getElementById('ratingSix').classList.toggle('text-[#ffe234]')

    }
    return (
        <>

            <div className='border-[1px] border-[#ededed] rounded-md w-[250px] py-2 px-2 hover:cursor-pointer'>

                <div className='bg-[#fafafa] py-2 rounded-md space-y-3'>
                    <img src={Watch} alt="watch" className='w-[110px] mx-auto' />
                </div>

                <div className='px-1 space-y-1 text-[#252525]'>
                    <h1 className='text-xl text-[#252525] font-semibold'>Watch</h1>
                    <div >
                        <i onClick={handleRatingOne} id='ratingOne' className="fa-solid fa-star text-[#ffe234] "></i>
                        <i onClick={handleRatingTwo} id='ratingTwo' className="fa-solid fa-star text-[#ffe234] "></i>
                        <i onClick={handleRatingThree} id='ratingThree' className="fa-solid fa-star text-[#ffe234] "></i>
                        <i onClick={handleRatingFour} id='ratingFour' className="fa-solid fa-star " ></i>
                        <i onClick={handleRatingFive} className="fa-solid fa-star  " id='ratingFive'></i>
                        <i onClick={handleRatingSix} className="fa-solid fa-star  " id='ratingSix'></i>

                    </div>

                    <p className='text-[#252525] text-base font-normal'>Brand : Apple</p>
                    <p className='text-[#252525] text-base font-normal'>Price : $4445</p>



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
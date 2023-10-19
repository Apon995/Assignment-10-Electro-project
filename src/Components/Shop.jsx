import React from 'react'
import Watch from '../assets/Watch.webp'

function Shop() {
  return (
    <>
      <br />
      <br />
      <section className='min-h-screen px-[5%] w-full'>
        <div className='bg-[#ededed]  w-[25%] rounded-t-md'>

          <div className='text-[#636363] font-normal text-xl flex items-center justify-center py-3 gap-2'>
            <h1 >Brands and Categories</h1>
          </div>
        </div>

        <div className='flex  gap-2'>

          {/* --brands-column-- */}
          <div className='border-[1px] border-[#ededed] w-[25%]  rounded-md'>
            
            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>All Categories brand</button>
            </div>
            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Apple (20)</button>
            </div>
           
            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Apple (20)</button>
            </div>
           
            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Apple (20)</button>
            </div>
           
            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Apple (20)</button>
            </div>
           
            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Apple (20)</button>
            </div>
           
            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Apple (20)</button>
            </div>
           
            <div className='py-3 px-6 hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Apple (20)</button>
            </div>
           

          </div>
          <div className='border-2 w-[75%] h-20'>


          <div className='border-[1px] bestSale-box border-[#ededed] rounded-md w-[250px] py-2 px-2 h-[200px] hover:cursor-pointer'>
              <div className='bg-[#fafafa] py-2 rounded-md space-y-3'>
                <img src={Watch} alt="watch" className='w-[110px] mx-auto' />
                <p className='text-center text-[#252525] font-medium'>Smart watch</p>
              </div>
            </div>

          </div>
        </div>

      </section>




    </>
  )
}

export default Shop
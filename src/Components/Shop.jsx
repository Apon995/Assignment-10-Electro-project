import React from 'react'
import Watch from '../assets/Watch.webp'
import ShopCard from '../Cards/ShopCard'

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
              <button>All Brands (24)</button>
            </div>
            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Apple (4)</button>
            </div>

            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Samsung (4)</button>
            </div>

            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Sony (4)</button>
            </div>

            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Google (4)</button>
            </div>

            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Intel (4)</button>
            </div>

            <div className='py-3 px-6 border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>LG (4)</button>
            </div>

            <div className='py-3 px-6 hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              <button>Hitachi (0)</button>
            </div>


          </div>
          <div className='border-2 w-[75%] h-20'>


           

          </div>
        </div>

      </section>


     <ShopCard/>
  

    </>
  )
}

export default Shop
import React from 'react';
import banner from '../assets/banner.webp'

function Home() {
  return (
    <>
      <section className='min-h-screen w-full px-[5%]'>
        <br />
        <br />
        {/* --banner- */}
        <div className='flex items-center'>
          <div className='w-[45%] space-y-5'>
            <div className='text-[#252525]'>
              <h1 className='uppercase text-red-600 text-xl tracking-[4px]'>Tech Products</h1>
              <p className='text-5xl font-medium'>Up to 20% Off <br />
                All  Products
              </p>
              <p>The best Technology and Gadgets Collection 2023</p>
            </div>

            <button className='bg-[#2742fd] px-3 py-2 font-normal rounded-md text-white'>Shop now</button>

          </div>
          <div className='w-[55%]'>
            <img src={banner} alt="" className='mx-auto ' />

          </div>
        </div>

      </section>





      <br />
      {/* --subscribe-newsletter */}
      <div className='w-full h-[200px] bg-[#2742fd] text-white px-[5%] flex items-center justify-between'>

        <div>
          <h1 className='text-4xl font-medium flex items-center gap-2'>
            <i className="fa-solid fa-dove"></i>
            Subscribe our Newsletter
          </h1>
        </div>

        <div className='flex border-[1px] h-[55px] w-[35rem] rounded-md'>
          <input type="text" name="search" id="search" placeholder='Enter your email address' className='w-[80%] px-2 rounded-l-sm outline-none border-none text-base font-normal' />
          <button className='w-[20%] bg-[#fafafa] rounded-r-sm text-base text-[#636363] hover:bg-inherit  font-medium duration-700 hover:text-white'>Submit</button>
        </div>

      </div>
    </>
  )
}

export default Home
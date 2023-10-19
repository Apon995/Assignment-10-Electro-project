import React from 'react';
import banner from '../assets/banner.webp'

function Home() {
  return (
    <>
      <section className='min-h-screen w-full '>
        <br />
        <br />
        {/* --banner- */}
        <div className='flex items-center px-[5%]'>
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
            <img src={banner} alt="" className='mx-auto w-[85%] ' />

          </div>
        </div>
        <br />
        <br />
        <br />
        {/* --policy-section-- */}
        <div className='w-full h-[120px] border-t-[1px] border-[#ededed] border-b-[1px] flex items-center justify-around z-10 shadow-md'>

          {/* --row-1-- */}
          <div className='flex items-center gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-truck text-[2rem] text-[#2742fd]"></i>

            <div>
              <h1 className='text-[#252525] text-xl font-medium'> Free devlivery</h1>
              <p className='text-sm text-[#636363] font-normal'>   Free devlivery on all US order</p>

            </div>


          </div>

          {/* --row-2-- */}
          <div className='flex items-center gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-headphones text-[2rem] text-[#2742fd]"></i>
            <div>
              <h1 className='text-[#252525] text-xl font-medium'>Support 24/7</h1>
              <p className='text-sm text-[#636363] font-normal'>Contact us 24 hours a day</p>
            </div>

          </div>

          {/* ---row-3-- */}
          <div className='flex items-center gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-money-check-dollar text-[2rem] text-[#2742fd]"></i>

            <div>
              <h1 className='text-[#252525] text-xl font-medium'>100% Money Back</h1>
              <p  className='text-sm text-[#636363] font-normal'> You have 30 days to Return</p>
            </div>

          </div>



          {/* --row-4-- */}
          <div className='flex items-center gap-3 hover:cursor-pointer'>
            <i class="fa-solid fa-rotate-left text-[2rem] text-[#2742fd]"></i>

            <div>
              <h1 className='text-[#252525] text-xl font-medium'>30 Days Return</h1>
              <p className='text-sm text-[#636363] font-normal'>If Products have major problem</p>

            </div>

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
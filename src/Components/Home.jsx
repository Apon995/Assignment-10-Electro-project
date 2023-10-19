import React from 'react'

function Home() {
  return (
    <>





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
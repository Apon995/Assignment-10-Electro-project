import React from 'react'

function Mycart() {
  return (
    <>

      <div className='min-h-screen px-[5%] '>
        <div className='flex gap-5 md:flex-row flex-col-reverse'>
          <div className='md:w-[75%]  w-full border-[1px] rounded-md border-[#636363]  bg-[#FFF] shadow-lg'>
            <div className='px-4 py-4'>
              <h1 className='text-[#252525] font-semibold text-xl'>Your Cart </h1>
              <br />
              <br />
              <div>
              products example
              </div>
            </div>


          </div>
          <div className='md:w-[35%] w-full border-[1px] rounded-md  border-[#636363] h-fit bg-[#FFF] shadow-lg'>

            <div className='px-5 py-4 space-y-5'>
              <div >
                <table className="text-center w-full font-normal text-[#252525]">


                  <tr class="border-b-[1px] border-[#636363]">
                    <th className='font-medium text-base text-[#252525]'>
                      Product quantity
                    </th>
                    <th class="py-1 font-medium text-base text-[#252525] ">
                      Total cost
                    </th>

                  </tr>

                  <tr className="border-b-[1px]  border-[#636363]">

                    <td className='font-normal text-base text-[#636363]'>1</td>
                    <td className='font-normal text-base text-[#636363]'>10</td>


                  </tr>

                </table>
              </div>

              <button className='bg-[#2742fd] px-3 w-full py-2 border-[2px] border-[#2742fd] hover:bg-inherit duration-300  hover:text-[#252525] font-normal text-base rounded-md text-white'>Pay now</button>
            </div>

          </div>
        </div>

      </div>




















    </>
  )
}

export default Mycart
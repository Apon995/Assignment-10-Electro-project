import React, { useContext, useEffect, useState } from 'react'
import CartItemCard from '../Cards/CartItemCard';
import { globalContext } from '../ContextHooks/Provider';

function Mycart() {
  const { Mycartitems } = useContext(globalContext);

  const [Total, setTotal] = useState(0)



  useEffect(() => {
    const totalprice = Mycartitems.reduce((i, product) => i + parseInt(product.price), 0)
    setTotal(totalprice)
  }, [Mycartitems.length])





  return (
    <>

      <div className='min-h-screen lg:px-[5%] md:px-[3%] px-[3%] '>
        <div className='flex gap-5 lg:flex-row flex-col-reverse'>
          <div className='lg:w-[75%]  w-full border-[1px] rounded-md border-[#636363]  bg-[#FFF] shadow-lg'>
            <div className='px-4 py-4'>
              <h1 className='text-[#252525] font-semibold text-xl'>Your Cart </h1>
              <br />
              <br />
              <div className='space-y-2'>
                {
                  Mycartitems?.map(buyProduct => <CartItemCard key={buyProduct._id} buyProduct={buyProduct} />)
                }
              </div>
            </div>


          </div>
          <div className='lg:w-[35%] md:w-[50%] mx-auto w-full border-[1px] rounded-md  border-[#636363] h-fit bg-[#FFF] shadow-lg'>

            <div className='px-5 py-4 space-y-5'>
              <div >
                <table className="text-center w-full font-normal text-[#252525]">
                  <tbody>
                    <tr className="border-b-[1px] border-[#636363]">
                      <th className='font-medium text-base text-[#252525]'>
                        Product quantity
                      </th>
                      <th className="py-1 font-medium text-base text-[#252525] ">
                        Total cost
                      </th>

                    </tr>

                    <tr className="border-b-[1px]  border-[#636363]">

                      <td className='font-normal text-base text-[#636363]'>{Mycartitems?.length}</td>
                      <td className='font-normal text-base text-[#636363]'>{Total}</td>


                    </tr>

                  </tbody>




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
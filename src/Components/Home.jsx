import React, { useEffect, useState } from 'react';
import banner from '../assets/banner.webp'
import TopSellCard from '../Cards/TopSellCard';
import Putin from '../assets/customer-4.jpg'
import kin from '../assets/customer-1.jpg'
import mark from '../assets/customer-2.jpg'
import musk from '../assets/customer-3.webp'



import Card from '../Cards/Card';
import NewProductCard from '../Cards/NewProductCard';



function Home() {
  const [Product, setProduct] = useState([]);


  useEffect(() => {

    fetch('http://localhost:5000/Products')
      .then(res => res.json())
      .then(data => setProduct(data))

  }, [])






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
        <marquee  behavior="scroll" direction='left'  className='z-10 shadow-md bg-[#ffffff]  border-t-[1px] border-[#ededed] border-b-[1px]' >
          <div  className='w-full h-[120px] flex items-center justify-around '>

           
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
                <p className='text-sm text-[#636363] font-normal'> You have 30 days to Return</p>
              </div>

            </div>



            {/* --row-4-- */}
            <div className='flex items-center gap-3 hover:cursor-pointer'>
              <i className="fa-solid fa-rotate-left text-[2rem] text-[#2742fd]"></i>

              <div>
                <h1 className='text-[#252525] text-xl font-medium'>30 Days Return</h1>
                <p className='text-sm text-[#636363] font-normal'>If Products have major problem</p>

              </div>

            </div>

            {/* ---row--5 */}
            <div className='flex items-center gap-3 hover:cursor-pointer'>
              <i className="fa-solid fa-money-bill text-[2rem] text-[#2742fd]"></i>

              <div>
                <h1 className='text-[#252525] text-xl font-medium'>Payment Secure</h1>
                <p className='text-sm text-[#636363] font-normal'>We ensure secure payment</p>

              </div>

            </div>




          </div>
        </marquee>

        <br />
        <br />
        <br />

        {/* ---top--sell-products-sction-- */}

        <div className='px-[5%] w-full'>

          <div className='bg-[#2742fd]  w-[20%] rounded-t-md'>

            <div className='text-white font-medium text-xl flex items-center justify-center py-3 gap-2'>

              <i className="fa-solid fa-fire"></i>
              <h1 > Top Sell products</h1>
            </div>


          </div>
          <div className='flex items-center gap-2'>
            {
              Product?.slice(1, 6).map((data) => <TopSellCard key={data._id} data={data} />)
            }

          </div>

        </div>

        <br />
        <br />

        <div className='px-[5%] grid grid-cols-2 gap-4'>


          {

            Product?.slice(1, 7).map((data) => <Card key={data?._id} data={data} />)

          }
        </div>
        <br />
        <br />

        {/* ---New--products-- */}
        <div className='px-[5%] w-full'>

          <div className='bg-[#2742fd]  w-[32%] rounded-t-md'>

            <div className='text-white font-medium text-xl flex items-center justify-center py-3 gap-2'>


              <h1 >New products</h1>
            </div>


          </div>
          <div className=' grid grid-cols-3 gap-5'>

            {
              Product?.slice(1,3).map((data) => <NewProductCard key={data._id} data={data} />)
            }


          </div>

        </div>

        <br />
        <br />
        <br />
        {/* ----our--customers-review--- */}
        <div>
          <h1 className='text-base font-medium text-red-500 text-center'>Our customers</h1>
          <div className='text-center space-y-2'>
            <h2 className='text-4xl font-semibold text-[#252525]'>Our Customer Reviews</h2>
            <p className='text-base font-normal text-[#636363]'>Our every customer feedback is good , products quality and service awsome!</p>


          </div>

          <br />
          <br />

          <div className='grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-0 md:gap-5  px-[5%] '>
            {/* ---client-one-- */}
            <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md '>
              <div className='w-full my-auto'>
                <img src={kin} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
              </div>
              <div className='py-2 px-2 space-y-3'>
                <h1 className='text-base font-normal text-[#636363]'>
                  "I've been a loyal customer of Electro.com for years, and they never disappoint. The range of electrical and tech products they offer is impressive. Not only do they have the latest gadgets, but their customer service is top-notch. Quick delivery, competitive prices, and a user-friendly website make them my go-to for all things electronic!"
                </h1>
                <p className='text-sm font-semibold text-[#252525]'>kin jon un</p>
              </div>

            </div>
            {/* ---client-two-- */}
            <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
              <div className='w-full my-auto'>
                <img src={musk} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
              </div>
              <div className='py-2 px-2 space-y-3'>
                <h1 className='text-base font-normal text-[#636363]'>
                  "Electro.com has a fantastic selection of products. I recently purchased a new smartphone and some electrical tools, and I couldn't be happier. The quality is always excellent, and their prices are very competitive. Plus, they provide detailed product descriptions, which is helpful when making a decision. Highly recommended!"
                </h1>
                <p className='text-sm font-semibold text-[#252525]'>Elon musk</p>
              </div>

            </div>
            {/* ---client-three-- */}
            <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
              <div className='w-full my-auto'>
                <img src={mark} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
              </div>
              <div className='py-2 px-2 space-y-3'>
                <h1 className='text-base font-normal text-[#636363]'>
                  "I had some questions about a complex electrical component I needed for a DIY project, and the customer support at Electro.com was amazing. They were patient, knowledgeable, and helped me choose the right product. It's rare to find such great customer service these days. Kudos to the team!"
                </h1>
                <p className='text-sm font-semibold text-[#252525]'>Mark Zuckerbug </p>
              </div>

            </div>
            {/* ---client-four-- */}
            <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
              <div className='w-full my-auto'>
                <img src={Putin} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
              </div>
              <div className='py-2 px-2 space-y-3'>
                <h1 className='text-base font-normal text-[#636363]'>
                  "I've compared prices on various sites, and Electro.com consistently offers some of the best deals on electrical and tech products. Their discounts and promotions are fantastic. Plus, they frequently update their inventory, so you can always find the latest technology at reasonable prices."
                </h1>
                <p className='text-sm font-semibold text-[#252525]'>Vladimir Putin</p>
              </div>

            </div>


          </div>
        </div>

      </section>




      <br />
      <br />
      {/* --subscribe-newsletter */}
      <div className='w-full h-[200px] bg-[#2742fd] text-white px-[5%] flex items-center justify-between'>

        <div>
          <h1 className='text-4xl font-medium flex items-center gap-2'>
            <i className="fa-solid fa-dove"></i>
            Subscribe our Newsletter
          </h1>
        </div>

        <div className='flex border-[1px] h-[65px] w-[35rem] rounded-md'>
          <input type="text" name="search" id="search" placeholder='Enter your email address' className='w-[80%] px-2 rounded-l-sm outline-none border-none text-base font-normal' />
          <button className='w-[20%] bg-[#fafafa] rounded-r-sm text-base text-[#636363] hover:bg-inherit  font-medium duration-700 hover:text-white'>Submit</button>
        </div>

      </div>




    </>
  )
}

export default Home
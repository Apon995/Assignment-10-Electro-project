import React, { useContext, useEffect, useState } from 'react';
import TopSellCard from '../Cards/TopSellCard';
import Putin from '../assets/customer-4.jpg'
import kin from '../assets/customer-1.jpg'
import mark from '../assets/customer-2.jpg'
import musk from '../assets/customer-3.webp'
import Card from '../Cards/Card';
import NewProductCard from '../Cards/NewProductCard';
import { globalContext } from '../ContextHooks/Provider';
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function Home() {

  const { HandleAddtoCart } = useContext(globalContext);
  const [Product, setProduct] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/Products')
      .then(res => res.json())
      .then(data => setProduct(data))

  }, [])




  return (
    <>
      <section className='min-h-screen w-full '>
        <br />
        {/* --banner- */}
        <div className='flex md:items-center md:flex-row flex-col lg:px-[5%] md:px-[3%] px-[3%]'>
          <div className='md:w-[55%] space-y-5'>
            <div className='text-[#252525]'>
              <h1 className='uppercase text-red-600 text-xl tracking-[4px]'>Tech Products</h1>
              <p className='lg:text-5xl md:text-4xl text-3xl font-medium'>Up to 20% Off <br />
                All  Products
              </p>
              <p>The best Technology and <br /> Gadgets Collection 2023</p>
            </div>

            <button onClick={() => navigate('/shop')} className='bg-[#2742fd] px-6 py-3 rounded-md text-white hover:text-[#252525] duration-500  border-[2px] border-[#2742fd] hover:bg-inherit hover:text-normal  font-medium'>Shop now</button>

          </div>
          <div className='md:w-[45%] md:pt-0 pt-7 '>

            <div className='md:w-[80%]'>
              <Carousel dynamicHeight={true} showIndicators={false} autoPlay={true} showThumbs={false} infiniteLoop={true} showArrows={false} interval={3000} showStatus={false}>

                <div className='h-full ' >
                  <img src="https://i.ibb.co/stvrFwg/Nest-Audio.jpg" className='mx-auto' />
                </div>
                <div className=' h-full ' >
                  <img src="https://i.ibb.co/vBp1RkT/Wireless-Keyboard-Mouse.jpg" className='mx-auto' />
                </div>
                <div className=' h-full ' >
                  <img src="https://i.ibb.co/fnW8jBM/hpcomputer.jpg" className='mx-auto' />
                </div>
                <div className='h-full ' >
                  <img src="https://i.ibb.co/0GXGKYX/V60-Thin-Q.webp" className='mx-auto' />
                </div>
                <div className='h-full ' >
                  <img src="https://i.ibb.co/fnW8jBM/hpcomputer.jpg" className='mx-auto' />
                </div>
                <div className='h-full ' >
                  <img src="https://i.ibb.co/9Z7fPmN/Tone-Free-Earbuds.jpg" className='mx-auto' />
                </div>
                <div className='h-full ' >
                  <img src="https://i.ibb.co/9YwHwzN/ihone11.webp" className='mx-auto' />
                </div>
                <div className='h-full ' >
                  <img src="https://i.ibb.co/TgVG9F6/Alpha-A7-camera.jpg" className='mx-auto' />
                </div>
                <div className='h-full ' >
                  <img src="https://i.ibb.co/WDPMxjZ/Galaxy-Buds-Pro.jpg" className='mx-auto' />
                </div>
                <div className='h-full ' >
                  <img src="https://i.ibb.co/G2ys1Z9/Galaxy-Book.jpg" className='mx-auto' />
                </div>
              </Carousel>

            </div>

          </div>
        </div>
        <br />
        {/* --policy-section-- */}

        <div className='w-full h-[120px] md:flex hidden items-center justify-around z-10 shadow-md bg-[#ffffff]  border-t-[1px] border-[#ededed] border-b-[1px] '>


          {/* --row-1-- */}
          <div className='flex lg:flex-row md:flex-col text-center items-center lg:text-start gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-truck text-[2rem] text-[#2742fd]"></i>

            <div>
              <h1 className='text-[#252525] text-xl font-medium'> Free devlivery</h1>
              <p className='text-sm text-[#636363] font-normal'>   Free devlivery on all US order</p>

            </div>


          </div>

          {/* --row-2-- */}
          <div className='flex lg:flex-row md:flex-col text-center items-center lg:text-start gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-headphones text-[2rem] text-[#2742fd]"></i>
            <div>
              <h1 className='text-[#252525] text-xl font-medium'>Support 24/7</h1>
              <p className='text-sm text-[#636363] font-normal'>Contact us 24 hours a day</p>
            </div>

          </div>

          {/* ---row-3-- */}
          <div className='flex lg:flex-row md:flex-col text-center items-center lg:text-start gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-money-check-dollar text-[2rem] text-[#2742fd]"></i>

            <div>
              <h1 className='text-[#252525] text-xl font-medium'>100% Money Back</h1>
              <p className='text-sm text-[#636363] font-normal'> You have 30 days to Return</p>
            </div>

          </div>



          {/* --row-4-- */}
          <div className='lg:flex md:hidden items-center  gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-rotate-left text-[2rem] text-[#2742fd]"></i>

            <div>
              <h1 className='text-[#252525] text-xl font-medium'>30 Days Return</h1>
              <p className='text-sm text-[#636363] font-normal'>If Products have major problem</p>

            </div>

          </div>

          {/* ---row--5 */}
          <div className='xl:flex lg:hidden md:hidden  items-center gap-3 hover:cursor-pointer'>
            <i className="fa-solid fa-money-bill text-[2rem] text-[#2742fd]"></i>

            <div>
              <h1 className='text-[#252525] text-xl font-medium'>Payment Secure</h1>
              <p className='text-sm text-[#636363] font-normal'>We ensure secure payment</p>

            </div>

          </div>




        </div>


        <br />
        <br />
        <br />

        {/* ---top--sell-products-sction-- */}

        <div className='lg:px-[5%] md:px-[3%] px-[3%] w-full'>

          <div className='bg-[#2742fd]  xl:w-[20%] md:w-[40%]  rounded-t-md'>

            <div className='text-white font-medium text-xl flex items-center justify-center py-3 gap-2'>

              <i className="fa-solid fa-fire"></i>
              <h1 > Top Sell products</h1>
            </div>


          </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 '>
            {
              Product?.slice(1, 5).map((data) => <TopSellCard key={data._id} data={data} />)
            }

          </div>

        </div>

        <br />
        <br />

        <div className='px-[5%] grid md:grid-cols-2 grid-cols-1  gap-4'>


          {

            Product?.slice(1, 3).map((data) => <Card key={data?._id} data={data} />)

          }
        </div>
        <br />
        <br />

        {/* ---New--products-- */}
        <div className='lg:px-[5%] md:px-[3%] px-[3%] w-full'>

          <div className='bg-[#2742fd]  lg:w-[32%] rounded-t-md'>

            <div className='text-white font-medium text-xl flex items-center justify-center py-3 gap-2'>


              <h1 >New products</h1>
            </div>


          </div>
          <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>

            {
              Product?.slice(1, 7).map((data) => <NewProductCard key={data._id} data={data} HandleAddtoCart={HandleAddtoCart} />)
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

          <div className='grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-0 md:gap-5  lg:px-[5%] md:px-[3%] px-[3%] '>
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
      <div className='w-full md:h-[200px] md:py-0 py-7 bg-[#2742fd] text-white px-[5%] flex md:flex-row flex-col items-center justify-center md:justify-between md:gap-0 gap-5'>


        <div className='md:text-4xl text-2xl inline-flex items-center gap-4'>

          <i className="fa-solid fa-dove md:block hidden"></i>

          <h1 className='text-center'>Subscribe <br /> our Newsletter</h1>

        </div>


        <div className='flex border-[1px] md:h-[65px] h-[60px] md:w-[35rem] w-full rounded-md'>
          <input type="text" name="search" id="search" placeholder='Enter your email address' className='md:w-[80%] w-[70%] px-2 rounded-l-sm outline-none border-none md:text-base text-sm font-normal' />
          <button className='md:w-[20%] w-[30%] bg-[#fafafa] rounded-r-sm text-base text-[#636363] hover:bg-inherit  font-noraml duration-700 hover:text-white'>Submit</button>
        </div>

      </div>







    </>
  )
}

export default Home
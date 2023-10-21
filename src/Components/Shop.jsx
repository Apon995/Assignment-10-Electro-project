import React, { useState, useEffect, useContext } from 'react';
import ShopCard from '../Cards/ShopCard';
import Swal from 'sweetalert2';
import searchingDuck from '../assets/searching.gif';
import { useNavigate } from 'react-router-dom'
import { globalContext } from '../ContextHooks/Provider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function Shop() {
  const Navigate = useNavigate();

  const { HandleAddtoCart } = useContext(globalContext)





  const [ProductData, setProductData] = useState([]);
  const [AlldataLength, setAlldataLength] = useState(null);

  const [showAll, setShowAll] = useState(9)


  useEffect(() => {

    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/Products')
      .then(res => res.json())
      .then(data => {
        setProductData(data)
        setAlldataLength(data.length)
      })

  }, [])



  const HandleToloadAllBrands = () => {
    document.getElementById('all').classList.add('shopActive')
    document.getElementById('apple').classList.remove('shopActive')
    document.getElementById('samsung').classList.remove('shopActive')
    document.getElementById('sony').classList.remove('shopActive')
    document.getElementById('goggle').classList.remove('shopActive')
    document.getElementById('intel').classList.remove('shopActive')
    document.getElementById('lg').classList.remove('shopActive')
    document.getElementById('hitachi').classList.remove('shopActive')

    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        setProductData(data)
        setAlldataLength(data.length)
      })



  }

  const HandleToloadApple = () => {
    document.getElementById('all').classList.remove('shopActive')
    document.getElementById('apple').classList.add('shopActive')
    document.getElementById('samsung').classList.remove('shopActive')
    document.getElementById('sony').classList.remove('shopActive')
    document.getElementById('goggle').classList.remove('shopActive')
    document.getElementById('intel').classList.remove('shopActive')
    document.getElementById('lg').classList.remove('shopActive')
    document.getElementById('hitachi').classList.remove('shopActive')


    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/Apple')
      .then(res => res.json())
      .then(data => {
        setProductData(data)

      })



  }
  const HandleToloadSamsung = () => {
    document.getElementById('all').classList.remove('shopActive')
    document.getElementById('apple').classList.remove('shopActive')
    document.getElementById('samsung').classList.add('shopActive')
    document.getElementById('sony').classList.remove('shopActive')
    document.getElementById('goggle').classList.remove('shopActive')
    document.getElementById('intel').classList.remove('shopActive')
    document.getElementById('lg').classList.remove('shopActive')
    document.getElementById('hitachi').classList.remove('shopActive')

    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/Samsung')
      .then(res => res.json())
      .then(data => {
        setProductData(data)

      })



  }
  const HandleToloadSony = () => {

    document.getElementById('all').classList.remove('shopActive')
    document.getElementById('apple').classList.remove('shopActive')
    document.getElementById('samsung').classList.remove('shopActive')
    document.getElementById('sony').classList.add('shopActive')
    document.getElementById('goggle').classList.remove('shopActive')
    document.getElementById('intel').classList.remove('shopActive')
    document.getElementById('lg').classList.remove('shopActive')
    document.getElementById('hitachi').classList.remove('shopActive')

    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/Sony')
      .then(res => res.json())
      .then(data => {
        setProductData(data)

      })



  }

  const HandleToloadGoogle = () => {

    document.getElementById('all').classList.remove('shopActive')
    document.getElementById('apple').classList.remove('shopActive')
    document.getElementById('samsung').classList.remove('shopActive')
    document.getElementById('sony').classList.remove('shopActive')
    document.getElementById('goggle').classList.add('shopActive')
    document.getElementById('intel').classList.remove('shopActive')
    document.getElementById('lg').classList.remove('shopActive')
    document.getElementById('hitachi').classList.remove('shopActive')



    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/Google')
      .then(res => res.json())
      .then(data => {
        setProductData(data)

      })



  }

  const HandleToloadIntel = () => {
    document.getElementById('all').classList.remove('shopActive')
    document.getElementById('apple').classList.remove('shopActive')
    document.getElementById('samsung').classList.remove('shopActive')
    document.getElementById('sony').classList.remove('shopActive')
    document.getElementById('goggle').classList.remove('shopActive')
    document.getElementById('intel').classList.add('shopActive')
    document.getElementById('lg').classList.remove('shopActive')
    document.getElementById('hitachi').classList.remove('shopActive')




    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/Intel')
      .then(res => res.json())
      .then(data => {
        setProductData(data)

      })



  }
  const HandleToloadLG = () => {
    document.getElementById('all').classList.remove('shopActive')
    document.getElementById('apple').classList.remove('shopActive')
    document.getElementById('samsung').classList.remove('shopActive')
    document.getElementById('sony').classList.remove('shopActive')
    document.getElementById('goggle').classList.remove('shopActive')
    document.getElementById('intel').classList.remove('shopActive')
    document.getElementById('lg').classList.add('shopActive')
    document.getElementById('hitachi').classList.remove('shopActive')



    fetch('https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/LG')
      .then(res => res.json())
      .then(data => {
        setProductData(data)

      })



  }

  const HandleToloadHitachi = () => {
    document.getElementById('all').classList.remove('shopActive')
    document.getElementById('apple').classList.remove('shopActive')
    document.getElementById('samsung').classList.remove('shopActive')
    document.getElementById('sony').classList.remove('shopActive')
    document.getElementById('goggle').classList.remove('shopActive')
    document.getElementById('intel').classList.remove('shopActive')
    document.getElementById('lg').classList.remove('shopActive')
    document.getElementById('hitachi').classList.add('shopActive')



    setProductData(null)

  }


  const HandleDeleteProduct = (id) => {

    Swal.fire({
      title: 'Are you sure Delete it?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/products/${id}`, {
          method: 'DELETE',

        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount == 1) {
              Swal.fire({
                icon: 'success',
                title: 'product has been deleted !',
                showConfirmButton: false,
                timer: 1500
              })

              const restData = ProductData?.filter((product => product._id !== id))
              setProductData(restData);
              setAlldataLength(ProductData.length)
            }
          })


      }
    })


  }

  const HandleUpdateProduct = (id) => {

    Swal.fire({
      title: 'Can you update this Product ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {

        Navigate(`/update/${id}`)





      }
    })

  }





  return (
    <>





      <section className='min-h-screen lg:px-[5%] md:px-[3%] px-[3%] w-full'>

        <div className='w-full lg:hidden md:block block md:h-auto'>
          <Carousel dynamicHeight={true} showIndicators={false} autoPlay={true} showThumbs={false} infiniteLoop={true} showArrows={false} interval={3000} showStatus={false}>

            <div className='h-full  ' >
              <h1 className='text-2xl text-black'>UP to 10% discount on laptop</h1>
              <img src="https://i.ibb.co/FwDdP5S/Laptop.webp" className='mx-auto' />
            </div>

            <div className=' h-full ' >
              <h1 className='text-2xl text-black'>UP to 40% discount on Key bords and mouse</h1>
              <img src="https://i.ibb.co/vBp1RkT/Wireless-Keyboard-Mouse.jpg" className='mx-auto' />
            </div>

            <div className=' h-full ' >
              <h1 className='text-2xl text-black'>UP to 50% discount on Hp monitor's</h1>
              <img src="https://i.ibb.co/fnW8jBM/hpcomputer.jpg" className='mx-auto' />
            </div>


          </Carousel>

        </div>

        {/* ---ad-section- */}
        <div className='W-full hidden lg:flex items-center justify-center rounded-xl '>
          <Carousel showIndicators={false} dynamicHeight={true} autoPlay={true} showThumbs={false} infiniteLoop={true} showArrows={false} interval={2000} showStatus={false}>

            {/* -ad-one */}
            <div className='flex justify-between md:flex-row flex-col items-center ' >
              <div className='md:w-[50%]'>
                <h1 className='lg:text-3xl text-base leading-[40px]'>
                  এই বিশেষ সময়ে আমরা LED টেলিভিশনে 10% ডিসকাউন্ট দেচ্ছি! <br />
                  দ্রুত অর্ডার করুন এবং অফার পেতে স্টক সীমিত।
                </h1>
              </div>
              <div className='md:w-[50%]'>


                <img src="https://i.ibb.co/k8f27Lf/BRAVIA-X90-J-tv.webp" className='w-fit h-[500px]' />


              </div>
            </div>

            {/* --ad-two-- */}
            <div className='flex justify-between md:flex-row flex-col items-center ' >
              <div className='md:w-[50%]'>
                <h1 className='lg:text-3xl text-base leading-[60px]'>
                  এক্সাইটিং ডিস্কাউন্ট! <br />
                  কম্পিউটার পন্যে ১৫% ছাড়। <br />
                  এই সুযোগ মিস করবেন না।
                </h1>
              </div>
              <div className='md:w-[50%]'>


                <img src="https://i.ibb.co/fnW8jBM/hpcomputer.jpg" className='w-fit h-[500px]' />


              </div>
            </div>
            {/* ----AD-THREE- */}
            <div className='flex justify-between md:flex-row flex-col items-center ' >
              <div className='md:w-[50%]'>
                <h1 className='lg:text-3xl text-base leading-[60px]'>
                  ইলেকট্রো ইলেকট্রনিক্স শপে সব পণ্যে ৫% ছাড়! <br />
                  আসুন এবং আপনার প্রিয় ইলেকট্রনিক্স আইটেমগুলি সাস্তে পেতে।
                </h1>
              </div>
              <div className='md:w-[50%]'>


                <img src="https://i.ibb.co/02JNYvR/alleletronices.jpg" className='w-fit h-[500px]' />


              </div>
            </div>






          </Carousel>

        </div>
        <div className='lg:hidden block'>
          <br />
          <br />
        </div>
        <div className='bg-[#ededed]  lg:w-[25%] rounded-t-md'>

          <div className='text-[#636363] font-normal text-xl flex items-center justify-center py-3 gap-2'>
            <h1 >Brands and Categories</h1>
          </div>
        </div>

        <div className='flex lg:flex-row flex-col  lg:gap-2 md:gap-5 gap-6'>

          {/* --brands-column-- */}
          <div className='border-[1px] border-[#ededed] lg:w-[25%] h-fit  rounded-md'>

            <button onClick={HandleToloadAllBrands} id='all' className='shopActive inline-flex gap-1 py-3 px-4 text-start border-b-[2px] w-full border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              All Brands <p>({AlldataLength})</p>
            </button>
            <br />
            <button onClick={HandleToloadApple} id='apple' className='py-3 inline-flex gap-1 w-full px-4 text-start border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              Apple
            </button>
            <br />
            <button onClick={HandleToloadSamsung} id='samsung' className='py-3 inline-flex gap-1 w-full px-4 text-start border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              Samsung
            </button>
            <br />

            <button onClick={HandleToloadSony} id='sony' className='py-3 inline-flex gap-1 w-full px-4 text-start border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              Sony
            </button>

            <button onClick={HandleToloadGoogle} id='goggle' className='py-3 inline-flex gap-1 w-full px-4 text-start border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              Goggle
            </button>
            <br />
            <button onClick={HandleToloadIntel} id='intel' className='py-3 w-full inline-flex gap-1 px-4 text-start border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              Intel
            </button>
            <br />
            <button onClick={HandleToloadLG} id='lg' className='py-3 w-full inline-flex gap-1 px-4 text-start border-b-[2px] border-[#ededed] hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              LG
            </button>
            <br />
            <button onClick={HandleToloadHitachi} id='hitachi' className='py-3 inline-flex gap-1 w-full px-4 text-start hover:cursor-pointer text-[#636363] text-base duration-700 rounded-sm font-normal hover:bg-[#2742fd] hover:text-white '>
              Hitachi
            </button>


          </div>

          <div className='lg:w-[75%]'>

            {

              ProductData?.length == 0 || ProductData == null ? <div className='flex w-full items-center justify-center flex-col gap-3'>

                <img src={searchingDuck} alt="searching duck" />
                <h2 className='text-[#252525] text-2xl '>
                  This brand no Data found !
                </h2>


              </div> : <>
                <div className=' grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4 '>

                  {
                    ProductData?.slice(0, showAll).map((product) => <ShopCard key={product._id} product={product} HandleDeleteProduct={HandleDeleteProduct} HandleUpdateProduct={HandleUpdateProduct} HandleAddtoCart={HandleAddtoCart} />)
                  }
                </div>

                <br />
                <br />
                {ProductData?.length < 9 ? "" : <div className={`w-full text-center ${showAll == ProductData?.length || ProductData == null ? "hidden" : 'block'} `}>
                  <button onClick={() => setShowAll(ProductData.length)} className='bg-[#2742fd] px-3 py-2 font-normal rounded-md text-white'>Show all</button>
                </div>
                }
                <br />





              </>
            }

          </div>

        </div>



      </section>





    </>
  )
}

export default Shop
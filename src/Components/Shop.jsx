import React, { useState, useEffect } from 'react';
import ShopCard from '../Cards/ShopCard';
import Swal from 'sweetalert2';
import searchingDuck from '../assets/searching.gif';
import { useNavigate } from 'react-router-dom'



function Shop() {
  const Navigate = useNavigate();

  const [ProductData, setProductData] = useState([]);
  const [AlldataLength, setAlldataLength] = useState(null);

  const [showAll, setShowAll] = useState(9)


  useEffect(() => {

    fetch('http://localhost:5000/Products')
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

    fetch('http://localhost:5000/products')
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


    fetch('http://localhost:5000/Apple')
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

    fetch('http://localhost:5000/Samsung')
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

    fetch('http://localhost:5000/Sony')
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



    fetch('http://localhost:5000/Google')
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




    fetch('http://localhost:5000/Intel')
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



    fetch('http://localhost:5000/LG')
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

        fetch(`http://localhost:5000/Products/${id}`, {
          method: 'DELETE',

        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount == 1) {
              console.log(data)

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
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        Navigate(`/update/${id}`)





      }
    })

  }





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
          <div className='border-[1px] border-[#ededed] w-[25%] h-fit  rounded-md'>

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

          <div className='w-[75%]'>

            {

              ProductData?.length == 0 || ProductData == null ? <div className='flex w-full items-center justify-center flex-col gap-3'>

                <img src={searchingDuck} alt="searching duck" />
                <h2 className='text-[#252525] text-2xl '>
                  This brand no Data found !
                </h2>


              </div> : <>
                <div className=' grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4 '>

                  {
                    ProductData?.slice(0, showAll).map((product) => <ShopCard key={product._id} product={product} HandleDeleteProduct={HandleDeleteProduct} HandleUpdateProduct={HandleUpdateProduct} />)
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
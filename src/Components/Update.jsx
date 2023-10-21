import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Update() {
  const navigate = useNavigate();

  const productData = useLoaderData();

  const { _id, product_Image, product_Name, brand_Name, product_type, price, short_description, rating } = productData || {}





  const handleSubmit = (e) => {
    e.preventDefault();

    const fromdata = new FormData(e.currentTarget);

    const Brand = fromdata.get('Brand');
    const Type = fromdata.get('Type');
    const Descripition = fromdata.get('Description');
    const ImageUrl = fromdata.get('Url');
    const Name = fromdata.get('Name');
    const Price = fromdata.get('Price');
    const Rating = fromdata.get('Rating');


    const obj = { ImageUrl, Name, Brand, Type, Price, Descripition, Rating }

    fetch(`https://electro-server-side-dg5wi715k-shofikulsamz995-gmailcom.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": 'Application/json'
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged == true) {

          Swal.fire({
            title: 'succesfully',
            text: 'successFully update Product !',
            icon: 'success',
            confirmButtonText: 'Okay'
          }).then((result) => {
            if (result.isConfirmed) {

              navigate('/shop')
            }
          })





        }
        else {
          Swal.fire({
            title: 'Something worng ',
            text: 'Something is worng try again  !',
            icon: 'error',
            confirmButtonText: 'Okay'
          })

        }


      })




  }
  return (
    <>
      <div className='min-h-screen px-[5%] w-full'>
        <div className='bg-[#2742fd]  md:w-[32%] rounded-t-md'>

          <div className='text-white font-medium text-xl flex items-center justify-center py-3 gap-2'>


            <h1 >Update products </h1>
          </div>
        </div>
        <div className='w-full border-[1px] rounded-lg h-fit px-4 py-5'>
          <form onSubmit={handleSubmit} >
            <div className='flex md:flex-row flex-col gap-3'>
              <div className='md:w-[50%] '>
                {/* ---brand-name-- */}
                <label htmlFor="Brand" className='space-y-2'>
                  <p className='text-base font-medium text-[#252525]'>Product Brand </p>
                  <input type="text" id='Brand' name='Brand' placeholder='Enter Product Brand name ' defaultValue={brand_Name} required className='md:w-[90%] w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-4 text-base font-normal' />
                </label>
                <br />
                <br />
                {/* ---product-type-- */}
                <label htmlFor="Type" className='space-y-2'>
                  <p className='text-base font-medium text-[#252525]'>Product Type</p>
                  <input type="text" id='Type' name='Type' placeholder='Enter Product type / Category ' defaultValue={product_type} required className='md:w-[90%] w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-4 text-base font-normal' />
                </label>
                <br />
                <br />
                {/* ---description-- */}
                <label htmlFor="Descripiton" className='space-y-2'>
                  <p className='text-base font-medium text-[#252525]'>Product Description</p>
                  <input type="text" id='Description' name='Description' placeholder='Enter Product Discription ' defaultValue={short_description} required className='md:w-[90%] w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-4 text-base font-normal' />
                </label>
                <br />
                <br />
                {/* ---product-image-url-- */}
                <label htmlFor="Url" className='space-y-2'>
                  <p className='text-base font-medium text-[#252525]'>Product image url</p>
                  <input type="text" id='Url' name='Url' placeholder='Enter Product image url ' defaultValue={product_Image} required className='md:w-[90%] w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-4 text-base font-normal' />
                </label>


              </div>

              <div className='md:w-[50%]  '>
                {/* ---product-name-- */}
                <label htmlFor="Name" className='space-y-2'>
                  <p className='text-base font-medium text-[#252525]'>Product Name </p>
                  <input type="text" id='Name' name='Name' placeholder='Enter Product name ' defaultValue={product_Name} required className='md:w-[90%] w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-4 text-base font-normal' />
                </label>

                <br />
                <br />
                {/* --product-price--- */}
                <label htmlFor="price" className='space-y-2'>
                  <p className='text-base font-medium text-[#252525]'>Product Price </p>
                  <input type="text" id='Price' name='Price' placeholder='Enter Product Price ' defaultValue={price} required className='md:w-[90%] w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-4 text-base font-normal' />
                </label>


                <br />
                <br />
                {/* ---rating-products-- */}
                <label htmlFor="Rating" className='space-y-2'>
                  <p className='text-base font-medium text-[#252525]'>Product rating </p>
                  <input type="number" id='Rating' name='Rating' placeholder='Enter Product rating  ' defaultValue={rating} required className='md:w-[90%] w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-4 text-base font-normal' />
                </label>


              </div>

            </div>


            <br />
            <div className='w-full text-center'>

              <button className='bg-[#2742fd] md:px-6 md:w-fit w-full py-2 border-[2px] border-[#2742fd] hover:bg-inherit duration-300  hover:text-[#252525] font-normal text-base rounded-md text-white'>Update now</button>
            </div>
          </form>

        </div>



      </div>




    </>
  )
}

export default Update
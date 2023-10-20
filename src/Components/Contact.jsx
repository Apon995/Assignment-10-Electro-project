import React from 'react'

function Contact() {
  return (
    <>
      <br />
      <div className='min-h-screen px-[5%] w-full'>
        <div>
          <div className='text-center space-y-2'>
            <h1 className='md:text-4xl text-3xl font-semibold text-[#000]'>Contact us Now !</h1>

            <p className='text-base font-normal text-[#54595F]'>Asslamwaikum , welcome to Electro.com, <br /> this is a Electronices and techonoly products seller how can we help you? </p>
          </div>




          <div id='socialicons' className='flex items-center w-fit mx-auto gap-4 pt-4 socialIcons md:justify-start justify-center'>
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>



        <br />
        <br />
        <br />

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-4'>
          {/* ---location-box-- */}
          <div className='border-[1px] p-7 space-y-1 text-center cursor-pointer hover:shadow-lg hover:bg-white  socialIcons'>
            <div className='border-[2px] p-4 rounded-full w-fit mx-auto text-xl'>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h1 className='text-xl font-semibold text-[#000]'>Our Location</h1>
            <p className='text-base font-normal text-[#54595F]'>  celenden park , Mirpur city 2005 <br />
              Allah karim square in Bangladesh.</p>

          </div>
          {/* ---contact-box--- */}
          <div className='border-[1px] p-7 space-y-1 text-center  cursor-pointer hover:shadow-lg hover:bg-white  socialIcons '>
            <div className='border-[2px] p-4 rounded-full w-fit mx-auto text-xl '>
              <i className="fa-solid fa-phone"></i>
            </div>
            <h1 className='text-xl font-semibold text-[#000]'>Call us</h1>
            <p className='text-base font-normal text-[#54595F]'> 01344433353
              <br />
              01244545335
            </p>

          </div>
          {/* --email-box-- */}
          <div className='border-[1px] p-7 space-y-1 text-center cursor-pointer hover:shadow-lg hover:bg-white  socialIcons'>
            <div className='border-[2px] p-4 rounded-full w-fit mx-auto text-xl'>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h1 className='text-xl font-semibold text-[#000]'>Email address</h1>
            <p className='text-base font-normal text-[#54595F]'> curto2023@gmail.com</p>

          </div>

        </div>

      </div>
      <br />




















    </>
  )
}

export default Contact
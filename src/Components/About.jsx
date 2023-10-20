import React from 'react'
import ceo from "../assets/ceo.avif";
import signature from '../assets/signature.png'

function About() {
  return (
   <>
   
   <div className='min-h-screen px-[5%]'>
        <div className='flex lg:flex-row flex-col items-center justify-between gap-3'>
          <div className='lg:w-[50%] w-full '>

            <img src={ceo} alt="eco and founder electro" className='mx-auto w-[70%]' />

          </div>
          <div className='lg:w-[50%] w-full text-center space-y-7'>
            <h1 className='md:text-4xl text-3xl font-semibold text-[#000]'>
             Electro.com since 2002 <br className='md:block hidden' />
              For More Than 22 Years
            </h1>

            <p className='text-base font-normal text-[#54595F] lg:w-[480px] mx-auto'>Electro.com, we are passionate about bringing the latest and greatest in electronics and technology products right to your doorstep. We understand that in today's fast-paced world, staying ahead in the tech game is not just a desire but a necessity. That's why we've made it our mission to be your trusted source for all things electronic. <br />
            Electro.com was founded in 2023 by a team of tech enthusiasts who saw the need for a one-stop destination for all things electronic. With a shared vision of making cutting-edge technology accessible to everyone, we embarked on this journey to provide you with the best selection of products, exceptional customer service, and a seamless shopping experience.
            </p>


            <div className='flex md:flex-row flex-col md:justify-start justify-center items-center text-start gap-3 ml-2 mx-auto'>
              <img src={signature} alt="" />
              <h2 className='font-medium text-base text-black'>
                Abdur Rahman <br />
                Founder and CEO Electro.com
              </h2>
            </div>
          </div>
        </div>

      </div>
      <br />

   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default About
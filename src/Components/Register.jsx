import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { globalContext } from '../ContextHooks/Provider';
import Swal from 'sweetalert2'


function Register() {
  const { RegisterEmailorPass } = useContext(globalContext);
  const [showPassword, setShowPassword] = useState(false);
  const [PasswordError, setPasswordError] = useState(null)



  const handleShowpassword = () => {
    setShowPassword(!showPassword);

    if (!showPassword) {
      document.getElementById('show').classList.remove('fa-eye')
      document.getElementById('show').classList.add('fa-eye-slash')
    }
    else {
      document.getElementById('show').classList.remove('fa-eye-slash')
      document.getElementById('show').classList.add('fa-eye')

    }
  }

  const HandleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {

      setPasswordError('Please Type strong Password !')
      setTimeout(() => {
        setPasswordError(null)
      }, 4000);

      return;

    }


    RegisterEmailorPass(email, password)
      .then(response => {
        console.log(response)
        e.target.reset();
        Swal.fire({
          icon: 'success',
          title: 'Register succesfull !',
          showConfirmButton: false,
          timer: 2000
        })
      })
      .catch(error => {
        if ('auth/email-already-in-use') {
          Swal.fire({
            icon: 'warning',
            title: 'This email already exits',
            text: 'please try another ',
            showConfirmButton: true,

          })

        }
        else {
          console.log(error)
        }
      })
  }
  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center '>

        <div className="border-[2px] max-w-[400px] w-[380px] shadow-md rounded-lg px-3 py-5">
          <div className="form-content">
            <h1 className='text-3xl font-normal text-center text-[#252525]'>Register Now</h1>
            <br />
            <form onSubmit={HandleRegister} >
              <div className=' space-y-6'>
                <div >
                  <input type="name" placeholder="Enter your Name" name='name' className='w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-3 text-base font-normal' />
                </div>
                <div >
                  <input type="email" placeholder="Enter your email address" name='email' required className='w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-3 text-base font-normal' />
                </div>
                <div >
                  <input type={`${showPassword ? 'text' : 'password'}`} name='password' required placeholder="Type a Password" className="w-full px-2 outline-none py-3 text-base font-normal duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] border-[2px]" />

                </div>
              </div>


              <div className='flex items-center gap-1 py-4'>
                <i onClick={handleShowpassword} id='show' className="fa-solid fa-eye md:left-[320px] left-[210px] top-[15px] hover:cursor-pointer"></i>
                <p className='text-xs'>{showPassword ? "hidden password" : "show password"}</p>
              </div>


              {
                PasswordError && <span className='text-sm text-[#ff3333]'>{PasswordError}</span>
              }


              <div>
                <button className='bg-[#2742fd] px-3 w-full py-2 border-[2px] border-[#2742fd] hover:opacity-90 font-normal text-xl rounded-md text-white'>Register</button>
              </div>
            </form>


            <br />
            <br />
            <div className="text-center">
              <span className='text-[#252525]'>Already have an account? <Link to='/Login' className="underline text-[#2742fd]">Login</Link></span>
            </div>
          </div>






        </div>




      </div>


    </>
  )
}

export default Register
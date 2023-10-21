import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { globalContext } from '../ContextHooks/Provider';


function Login() {

  const { LoginEmailorPass, GoogleLogin } = useContext(globalContext)
  const [showPassword, setShowPassword] = useState(false);
  const [PasswordError, setPasswordError] = useState(null)

  const location = useLocation();
  const navigate = useNavigate();




  const handleShowpassword = () => {
    setShowPassword(!showPassword);



    if (!showPassword) {
      document.getElementById('showEye').classList.remove('fa-eye')
      document.getElementById('showEye').classList.add('fa-eye-slash')
    }
    else {
      document.getElementById('showEye').classList.remove('fa-eye-slash')
      document.getElementById('showEye').classList.add('fa-eye')

    }
  }

  const HandleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {

      setPasswordError('Envalid password , try again !')
      setTimeout(() => {
        setPasswordError(null)
      }, 4000);

      return;

    }


    LoginEmailorPass(email, password)
      .then(response => {
        console.log(response)
        navigate(location?.state ? location?.state : '/')
      })
      .catch((error) => {
        console.log(error)
        if ('auth/invalid-login-credentials') {
          setPasswordError('Envalid password , try again !')
          setTimeout(() => {
            setPasswordError(null)
          }, 4000);

        }
      })



  }

  const HandleGoogleLogin = () => {
    GoogleLogin()
      .then(result => {
        console.log(result)
        navigate(location?.state ? location?.state : '/')
      })
      .catch(error => console.log(error))
  }
  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center '>

        <div className="border-[2px] max-w-[400px] w-[380px] shadow-md rounded-lg px-3 py-5">
          <div className="form-content">
            <h1 className='text-3xl font-normal text-center text-[#252525]'>Login</h1>
            <br />
            <form onSubmit={HandleLogin}  >
              <div className='space-y-3'>
              <div >
                <input type="email" placeholder="Enter your email address" name='email' className='w-full px-2 duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] outline-none border-[2px] py-3 text-base font-normal' />
              </div>
              {
                PasswordError && <span className='text-sm text-[#ff3333]'>{PasswordError}</span>
              }
              <div className=''>
                <input type={`${showPassword ? 'text' : 'password'}`} name='password' placeholder="Enter your password" className="w-full px-2 outline-none py-3 text-base font-normal duration-700 rounded-md border-[#adadad] focus:border-[#2742fd] border-[2px]" />
              </div>
              </div>



              <div className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-1'>
                <i onClick={handleShowpassword} id='showEye' className="fa-solid fa-eye md:left-[320px] left-[210px] top-[15px] hover:cursor-pointer"></i>
                 <p className='text-xs'>{showPassword ? "hidden password" : "show password"}</p>
                </div>
                <div>
                  <Link to='#' className="hover:underline hover:text-[#2742fd] pt-2 text-sm text-[#252525]">Forgot password?</Link>
                </div>

              </div>

              <div>
                <button className='bg-[#2742fd] px-3 w-full py-2 border-[2px] border-[#2742fd] hover:opacity-90 font-normal text-xl rounded-md text-white'>Login</button>
              </div>
            </form>

            <h1 className='text-center py-3 text-2xl text-[#2742fd] '>&</h1>

            <div className="text-center">
              <span className='text-[#252525]'>Don't have an account? <Link to='/Register' className="underline text-[#2742fd]">Register</Link></span>
            </div>
          </div>
          <br />

          <div className='space-y-2'>

            <button className="border-[1px] BtnLogin border-[#2742fd] w-full text-[#252525] py-3 rounded-lg gap-2 flex items-center justify-center font-normal text-base duration-700 hover:bg-[#2742fd] hover:text-white">
              <i className="fa-brands fa-facebook text-[#2742fd] text-2xl"></i>
              Login with Facebook
            </button>

            <button onClick={HandleGoogleLogin} className="border-[1px] BtnLogin border-[#2742fd] w-full py-3 text-[#252525] rounded-lg gap-2 flex items-center justify-center font-normal text-base duration-700 hover:bg-[#2742fd] hover:text-white">
              <i className="fa-brands fa-google text-[#2742fd] text-2xl"></i>
              Login with google
            </button>
          </div>



        </div>




      </div>


    </>
  )
}

export default Login
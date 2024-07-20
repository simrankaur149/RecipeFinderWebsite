import React, { useState } from 'react'
import Header from '../Components/Header'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import SignUp from './SignUp'

const LogIn = () => {
  const[showSignUp, setShowSignUp] = useState(false);

  const SignUpPage = ()=>{
    setShowSignUp(!showSignUp);
  }
  return (
    <>
    
    <div className='bg-[#f8dfdb] w-full'>
      <Header/>
      <div className='w-[50%] my-0 pt-20 pb-10 mx-auto flex flex-col justify-center items-center  '>
        {!showSignUp ? (
          <>
      <h2 className='text-2xl font-bold mb-4'>Welcome to Taste Map recipe finder</h2>
      <input
        className='border-b-2 outline-none border-gray-400 px-4 pt-3 pb-2 w-full'
        type='email'
        placeholder='Email'
      /><br />
      <input
        className='border-b-2 outline-none border-gray-400 pt-3 px-4 pb-2 w-full'
        type='password'
        placeholder='Password'
      />
      <button className='bg-gray-800 text-white rounded text-center py-3 w-full my-6 px-20'>Sign in</button>
      <p className='text-[12px] text-center'>
        Forgot Password?{' '}
        <span>
          <a href='#' onClick={SignUpPage}>Create Account</a>
        </span>
      </p>
      </>
      ):
      <SignUp toggleLogin={SignUpPage}/>
      }
      
      </div>
      <Newsletter/>
      <Footer/>
      </div>
    </>
  )
}

export default LogIn

import React from 'react'

const SignUp = ({toggleLogin}) => {
  return (
    <>
      <h2 className='text-2xl font-bold mb-4 '>Create Account</h2>
      <input
        className='border-b-2 px-4 outline-none border-gray-400 pt-3 pb-2 w-full'
        type='text'
        placeholder='Name'
      /><br />
      <input
        className='border-b-2 px-4 outline-none border-gray-400 pt-3 pb-2 w-full'
        type='email'
        placeholder='Email'
      /><br />
      <input
        className='border-b-2 px-4 outline-none border-gray-400 pt-3 pb-2 w-full'
        type='password'
        placeholder='Password'
      />
      <button className='bg-gray-800 text-white rounded text-center py-3 w-full my-6 px-20'>Sign up</button>
      <p className='text-[12px] text-center'>
        Already have an account?{' '}
        <span>
          <a href='#' onClick={toggleLogin}>Sign in</a>
        </span>
      </p>


    </>
  )
}

export default SignUp

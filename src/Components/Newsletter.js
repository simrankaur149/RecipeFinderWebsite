import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className='w-[70%] my-20 mx-auto text-center'>
        <h2 className='text-red-500 text-5xl font-bold tracking-widest '>Subscribe to our newsletter.</h2>
        <p className='text-red-500 py-10 font-light'>Sign up with your email address to receive news and updates.</p>
        <input type='text' className='p-4 border-2 border-gray-200 outline-red-500 mr-4 w-[40%]' placeholder='Email Address'/>
        <button className='text-red-500 py-4 px-6 border-2 border-red-500'>Sign Up</button>

      </div>
    </>
  )
}

export default Newsletter

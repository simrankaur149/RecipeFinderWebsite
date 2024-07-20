import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../Img/logo-food.png'

const Footer = () => {
  return (
    <>
      <div className='w-full flex   justify-center items-center bg-[#f8dfdb] '>
        <div className='navbar w-[90%] p-3 flex justify-center flex-col items-center'>
            <div className='logo'>
                <img src={logo} className='w-20 h-20 object-cover' />
            </div>
            <div className='icons flex text-[20px] justify-end items-center'>
            <IoLogoWhatsapp className='mx-3' />
            <MdEmail className='mx-3'/>
            <FaLinkedinIn className='ml-3 '/>
            </div>
            <div className='py-5 font-bold'>&copy; ALL RIGHT ARE RESERVED.</div>
        </div>
        
      </div>
    </>
  )
}

export default Footer

import React, { useContext, useEffect, useState } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from '../Img/logo-food.png'
import SignUp from '../Pages/SignUp';
import Logout from '../Pages/LogIn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const navItems = [
  { text: 'home', href: '/' },
  { text: 'about', href: 'about' },
  { text: 'recipes', href: 'recipes' },
  { text: 'contact', href: 'contact' },
  { text: 'login', href: 'login' }
];


const Header = () => {
  useEffect(()=>{
    gsap.to(".login-page",{
      zIndex:1
    })
  },[])

  const[toggleBtn, setToggleBtn] = useState(false);


   useGSAP(()=>{
    gsap.from(".navbar .logo ",{
      y:10,
      duration:1,
      delay:0.05,
      opacity:1,

    })
    gsap.from(".nav",{
      y:10,
      duration:1,
      delay:0.05,
      opacity:1,
      
    })
    gsap.from(".nav-items",{
      y:20,
      duration:0.5,
      delay:0.05,
      stagger:0.10
    })
    gsap.from(".icons",{
      y:10,
      duration:1,
      delay:0.05,
      stagger:0.10
    })
   
})
  
  const toggleButton= ()=>{
    setToggleBtn(!toggleBtn);
    if(!toggleBtn){
      gsap.from(".nav",{
          x:200,
          duration:0.30,
          delay : 0.15,
          opacity: 0,
          zIndex:1
      })
      gsap.from(".nav-items ",{
          x:200,
          duration:1,
          delay:0.5,
          opacity: 0,
          stagger:0.1,
      })
      gsap.from(".login ",{
        x:200,
        duration:1,
        delay:0.5,
        opacity: 0,
        
    })
    }
  }
  

  return (
    <>
      <div className='w-full flex justify-center items-center bg-[#f8dfdb] '>
        <div className='navbar w-[90%] p-3 flex justify-between items-center'>
            <div className='logo'>
                <img src={logo} className='w-20 h-20 object-cover' />
            </div>
            <div className={`nav  flex items-center ${toggleBtn ? 'flex-col w-1/2 fixed z-50 top-0 items-center justify-center p-20 backdrop:bg-opacity-10 shadow-lg shadow-pink-500/50 backdrop:invert bg-white h-full right-0 ' : 'hidden'} md:flex`}>
            {toggleBtn&&(
              <button onClick={toggleButton} className='absolute top-0 right-0 z-10 text-2xl pt-10 pr-10 color-white'><FaTimes/></button>
            )

            }
                {
                    navItems.map((item,index)=>{
                       return(
                        <a className='nav-items px-2 uppercase border-b-2 border-opacity-0 hover:border-opacity-100 border-b-black mx-1 text-[15px] tracking-wider py-3 ' 
                        key={index} href={item.href}>{item.text}</a>
                       )
                    })
                }
                
                
            </div>
            <div className='icons flex text-[20px] justify-end items-center'>
              <div className='md:hidden' onClick={toggleButton}>
                {toggleBtn ? <RxCross2/> : <FaBars/>}
              </div>
              <div className='hidden md:flex'>
            <IoLogoWhatsapp className='mx-3' />
            <MdEmail className='mx-3'/>
            <FaLinkedinIn className='ml-3 '/>
            </div>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default Header

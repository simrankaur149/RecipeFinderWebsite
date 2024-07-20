import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import aboutImg from '../Img/about.jpg'
import { gsap } from 'gsap'


const About = () => {
  useEffect(()=>{
    gsap.fromTo(".about-1", { y: 10 }, { y: -10, duration: 2, stagger: 0.2  });
    gsap.fromTo(".about-2", { y: 10 }, { y: -10, duration: 2 });
   });
  
   


  return (
    <>
      <Header/>
      <div className='about w-full py-12 h-full bg-[#f8dfdb] flex flex-wrap justify-around '>
        <div className='about-1 w-[40%]'>
            <h2 className='text-5xl font-extrabold py-8'>A food knowledge sharing community.</h2>
            <p className='text-gray-600 tracking-wide leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Sed elementum tempus egestas sed sed risus pretium quam. Id donec ultrices tincidunt arcu non sodales. Diam quam nulla porttitor massa id. Dolor purus non enim praesent elementum facilisis. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Nunc faucibus a pellentesque sit.

           <br></br> Laoreet suspendisse interdum consectetur libero. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Ridiculus mus mauris vitae ultricies leo integer malesuada.<br></br> Amet est placerat in egestas. Donec enim diam vulputate ut. 
            </p>
        </div>
        <div className='about-2 w-[40%]'>
            <img src={aboutImg}/>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default About

import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { gsap } from 'gsap'


const Contact = () => {
  useEffect(()=>{
    gsap.fromTo(".contact-1", { y: 10 }, { y: -10, duration: 2, stagger: 0.2  });
    gsap.fromTo(".contact-2", { y: 10 }, { y: -10, duration: 2 });
   });

  return (
    <>
      <Header/>
      <div className='contact w-full py-12 h-full bg-[#f8dfdb] flex flex-wrap justify-around '>
        <div className='contact-1 w-[40%]'>
            <h2 className='text-5xl font-extrabold py-8'>We’d love to hear from you.</h2>
            <p className='text-gray-600 tracking-wide leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Sed elementum tempus egestas sed sed risus pretium quam. Id donec ultrices tincidunt arcu non sodales. Diam quam nulla porttitor massa id. Dolor purus non enim praesent elementum facilisis. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Nunc faucibus a pellentesque sit.
            </p>
            <h3 className='text-1xl font-extrabold py-8'>
            email@example.com <br>
            </br>
            (555) 555-5555
            </h3>
        </div>
        <div className='contact-2 w-[50%] h-full'>
            <form className=' h-full p-10'>
                <p className='text-gray-600 text-[20px] py-3'>Name</p>
                <div className='w-full flex justify-between items-center'>
                <div className='w-[48%]'>
                <label className='text-gray-600 capitalize leading-relaxed'>First Name</label><br></br>
                <input className="p-4 w-full my-3 " type='text' required /><br></br>
                </div>
                <div className='w-[48%]'>
                <label className='text-gray-600 capitalize '>Last Name</label><br></br>
                <input className="p-4 w-full my-3" type='text' required/>
                <br></br>
                </div>
                </div>
                <label className='text-gray-600 capitalize leading-relaxed'>Email</label><br></br>
                <input className="p-4 my-3 w-full" type='email' required />
                <br></br>
                <label className='text-gray-600 capitalize leading-relaxed'>Message</label><br></br>
                <textarea rows={4} cols={72}></textarea>
                <button className='text-red-500 border-2 border-red-500 py-4 my-8 hover:bg-red-500 hover:text-white px-10'>Send</button>
            </form>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Contact

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';


const Cards = ({ userData = [] }) => {
  useEffect(() => {
    gsap.fromTo(".card", { y: 10 }, { y: -10, duration: 2, stagger: 0.10 });
  }, []);
  

  // Ensure userData is an array before mapping over it
  if (!Array.isArray(userData) || userData.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      <div className='gridContainer bg-[#f8dfdb] w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 py-5 px-10'>
        {userData.map((item) => (
          <div key={item.idMeal} className='gridItems break-inside-avoid mb-8 w-full'>
            <div className='card hover:opacity-50 relative z-10'>
              <img src={item.strMealThumb} className='w-full h-full object-cover' alt={item.strMeal} />
              <div className='text-center p-5'>
                <h2 className='text-2xl font-extrabold'>{item.strMeal}</h2>
                <Link to={`/recipes/${item.idMeal}`} className='text-red-500 capitalize border-b-2 border-red-500'>read more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

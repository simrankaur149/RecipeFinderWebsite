import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';
import Cards from './Cards';

const Search = () => {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        console.log(response);
        if (Array.isArray(response.data.meals)) {
          setUserData(response.data.meals);
          setFilterData(response.data.meals); // Initialize filterData with all meals
        } else {
          setUserData([]);
          setFilterData([]);
        }
      }).catch((error) => {
        console.log(error);
      });

    const tl = gsap.timeline();
    tl.from("h1", {
      y: 20,
      duration: 0.3
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (search) {
      const filter = userData.filter(item =>
        item.strMeal.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(filter);
    } else {
      setFilterData(userData);
    }
  }

  return (
    <>
      <div className='w-full top-20 h-full bg-[#f8dfdb]'>
        <div className='search-items flex justify-center items-center p-10 flex-col w-full'>
          <h1 className='search text-5xl font-extrabold pb-10 uppercase tracking-wider'>Find your perfect recipes</h1>
          <form onSubmit={handleSubmit} className='w-[80%] flex justify-center items-center'>
            <input
              type='text'
              placeholder='Find Yumminess'
              className='w-4/5 p-3'
              name='search'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setFilterData(e.target.value);
                console.log(filterData)
                console.log(e.target.value);
              }}
            />
            <button type="submit" className="p-3 bg-blue-500 text-white">Search</button>
          </form>
        </div>
        <Cards userData={filterData}/>
      </div>
    </>
  );
}

export default Search;

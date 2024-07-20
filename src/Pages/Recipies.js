import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import axios from 'axios';

const Recipes = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch initial recipes data
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        console.log(response);
        if (Array.isArray(response.data.meals)) {
          setUserData(response.data.meals);
        } else {
          setUserData([]);
        }
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Cards userData={userData} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Recipes;

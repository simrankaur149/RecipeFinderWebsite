import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const DetailedRecipe = () => {
  const {id} = useParams();
  const[recipe,setRecipe] = useState(null);

  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((response)=>{
    console.log(response);
    setRecipe(response.data.meals[0]);
  }).catch((error)=>{
    console.log(error);
  });
  },[id]);

  if(!recipe){
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className='bg-[#f8dfdb] w-full h-full'>
        <Header/>       
          <div className='pt-5 pb-10'>
            <h1 className='text-3xl mt-2 mb-10 md:text-5xl font-extrabold tracking-widest uppercase text-center'>{recipe.strMeal} recipe</h1>
            <div className='flex items-center sm:items-start  flex-col mx-auto sm:flex-row w-[80%]  '>
              <div className='w-[65%]'>
              <img src={recipe.strMealThumb} className='sm:w-[80%] w-full h-[80%] object-cover'/>
              </div>
              <div className='w-[30%] '>
                <h2><span className='font-extrabold'>Area</span> : {recipe.strArea}</h2>
                <h2><span className='font-extrabold'>Side</span> : {recipe.strCategory}</h2>
                
              <h4 className='uppercase font-semibold pt-4 pb-2'>Ingredients You need</h4>
              <p>{recipe.strIngredient1}</p>
              <p>{recipe.strIngredient2}</p>
              <p>{recipe.strIngredient3}</p>
              <p>{recipe.strIngredient4}</p>
              <p>{recipe.strIngredient5}</p>
              <p>{recipe.strIngredient6}</p>
              <p>{recipe.strIngredient7}</p>
              <p>{recipe.strIngredient8}</p>
              <p>{recipe.strIngredient9}</p>
              <p>{recipe.strIngredient10}</p>
              <p>{recipe.strIngredient11}</p>

              </div>
            </div>
            <div className='w-[80%] mx-auto'>
              <h4 className='text-4xl font-bold text-center my-3'>Instructions</h4>
              <p>{recipe.strInstructions}</p>
              <p>{recipe.strMeasure1}</p>
              <p>{recipe.strMeasure2}</p>
              <p>{recipe.strMeasure3}</p>
              <p>{recipe.strMeasure4}</p>
              <p>{recipe.strMeasure5}</p>
              <p>{recipe.strMeasure6}</p>
              <p>{recipe.strMeasure7}</p>
              <p>{recipe.strMeasure8}</p>
              <p>{recipe.strMeasure9}</p>
              <p>{recipe.strMeasure10}</p>
              <p>{recipe.strMeasure12}</p>
              <p>{recipe.strMeasure13}</p>
              <p>{recipe.strMeasure14}</p>
            </div>
            </div>
    
        <Footer/>
      </div>
    </>
  )
}

export default DetailedRecipe;

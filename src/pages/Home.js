import React,{useEffect,useState} from 'react'
import Recipe from '../components/Recipe';
import SearchRecipe from '../components/SearchRecipe';

const Home = () => {
  
  return (
    <>
      <div>
      <div className="container">
          <div className="row mt-4">
          
            <Recipe />
          </div>
          </div>
          </div>
          

    </>
  )
}

export default Home
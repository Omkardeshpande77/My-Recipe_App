import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../utils/fetchData'

function Recipe() {
  const { recipes } = useGlobalContext();
  const css=`background-image:recipe.recipe.image ;`;
  // console.log('hello');
  return (
  
    <>
        
            {recipes.map((recipe) => (  
             
              <div className="col-md-4 ">
                <NavLink className='page-class' to={`recipe/${recipe.recipe.label}`} key={recipe.recipe.label} >

                <div className="card-container">
                  <div className="card m-1 card-front text-center" >
                    <img className="card-img-top img-fluid no-repeat rounded" src={recipe.recipe.image} alt="" />
                    <div className="card-body ">
                      <h5 className="card-title">{recipe.recipe.label}</h5>
                    </div>
                  </div>

                  <div className="card m-1 card-back text-center">  
                  {/* <img className="card-img-top img-fluid no-repeat rounded" src={recipe.recipe.image} alt="" /> */}
                  <div className="card-body ">
                    {/* <h5 className='card-title '>{title}</h5> */}
                    <h5>Ingredients:</h5>
                    {recipe.recipe.ingredients.slice(0, 5).map((ingredient) => (
                      <p class="card-text">{ingredient.text}</p>
                    ))}
                    {/* <li className="list-group-item"><h2><b>Calories</b>:{calories} cal</h2></li> */}
                  </div>
                </div>

                </div>
                      
              </NavLink>
              </div>
            ))}
          
        
    </>
  )
}

export default Recipe

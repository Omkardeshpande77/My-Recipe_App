import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalContext } from "../utils/fetchData";

const RecipeDetail = () => {
  
  const id=useParams();
 
  let img='';
  let label=''
  let ingredient;
  
  // console.log(id.id);
  const { recipes } = useGlobalContext();
  
  
  // console.log(recipes);

  {
    recipes.map((recipe)=>{
      if (recipe.recipe.label===id.id) {
        img=recipe.recipe.image;
        label=recipe.recipe.label;
        // console.log(img);
        ingredient=recipe.recipe.ingredientLines;
      } else {
        
      }
    })
  }
  // console.log(img)

  return (
    <>
    {
        <div className="container-fluid" >
          <div class="row mt-5 mb-5 ">
            <div class="col-md-6">
                  <div class="detailimg mt-4">
                    <img className="img-fluid" src={img} />
                  </div>
            
            </div>
            <div className="col-md-6">
                <h1 className="text-label ">{label}</h1>
                      <ol className=" ingridients">
                         <h3 className="text-primary">Ingredients:</h3>
                    {
                      ingredient.map((ing)=>(
                        <li className="text-white  ">  <p className="text-white mt-2 ">{ing}</p></li>
                      ))
                    }
                      
                    </ol>
                   
            </div>
            <div>
            </div>
          </div>
        </div>
        
     }
    </>
  )
}

export default RecipeDetail
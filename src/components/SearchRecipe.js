import React,{useEffect,useState} from 'react'
import {recipeOptions,fetchData, useGlobalContext} from '../utils/fetchData';
import Home from '../pages/Home';
const SearchRecipe = () => {
    
  const {query,setQuery}=useGlobalContext();
  const [search,setSearch]=useState('');
  const updateSearch=e=>{
    setSearch(e.target.value);
    // console.log(search);
  }
  
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div>
        <form  class="d-flex bg-dark border-light text-primary w-45" onSubmit={getSearch} >
              <input
                class="form-control me-2 bg-dark border-dark text-primary w-45"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={updateSearch}
              />
              <button class="btn btn-outline-primary" type="search" >
                Search
              </button>
            </form>

            <div>
             
            </div>
    </div>
  )
}

export default SearchRecipe
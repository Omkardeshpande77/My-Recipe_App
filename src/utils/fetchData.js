import React, { useContext, useEffect,useState } from "react";


const AppContext=React.createContext();
const AppProvider = ({children}) =>{
    
    const [recipes, setRecipes] = useState([]);
    const [query,setQuery]=useState('banana');
    


    const API_ID='388ddace';
    const API_URL=`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

    
    
    
    
    const getRecipies = async(url) =>{
        try{
            const response= await fetch(url);
            const data=await response.json();
            setRecipes(data.hits);
            // console.log(data.hits);
            
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{

        getRecipies(API_URL);

        // return ()=>clearTimeout(timerOut);
    },[query]);


    return <AppContext.Provider value={{recipes,query,setQuery}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};
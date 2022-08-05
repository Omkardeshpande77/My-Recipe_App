import React from 'react'
import {Route,Routes} from 'react-router-dom';
import './App.css';
import RecipeDetail from './pages/RecipeDetail';
import Home from './pages/Home';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />}/> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
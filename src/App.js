import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Recipies from './Pages/Recipies'
import Contact from './Pages/Contact'
import LogIn from './Pages/LogIn'
import DetailedRecipe from './Pages/DetailedRecipe'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/recipes' element={<Recipies/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/recipes/:id' element={<DetailedRecipe/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App

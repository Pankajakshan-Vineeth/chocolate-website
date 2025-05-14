import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
    </div>
  )
}

export default App

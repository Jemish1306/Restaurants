import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Deshbord from './Components/Deshbord'
import './App.css'
import './index.css'
const App = () => {



  return (
  <>

  <Routes>
    <Route path='/' element={<Deshbord/>}/>

  </Routes>



  </>
  )
}

export default App
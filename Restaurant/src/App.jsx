import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Deshbord from './Pages/Deshbord'
import './App.css'
import './index.css'
import RegistrationForm from './Auth/Registration'
import RegistrationPage from './Pages/RegistrationPage'
const App = () => {



  return (
  <>

  <Routes>

    <Route path='/' element={<Deshbord/>}/>
    <Route path='/Registration' element={<RegistrationForm/>}/>
    <Route path='/Creationmodel' element={<RegistrationPage/>}/>

  </Routes>
  



  </>
  )
}

export default App
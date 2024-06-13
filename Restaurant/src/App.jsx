import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import './index.css'
import RegistrationForm from './Auth/Registration'
import RegistrationPage from './Pages/RegistrationPage'
import MainPageRoute from './Pages/MainPageRoute'

import AuthPage from './Pages/AuthPage'
const App = () => {


  return (
  <>

  <Routes>

    <Route path='/' element={<MainPageRoute/>}/>
    <Route path='/Registration' element={<RegistrationForm/>}/>
    <Route path='/Login' element={<AuthPage/>}/>
    <Route path='/Creationmodel' element={<RegistrationPage/>}/>

  </Routes>
  



  </>
  )
}

export default App
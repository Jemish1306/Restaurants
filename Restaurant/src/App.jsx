import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import './App.css'
import './index.css'
import RegistrationForm from './Components/Auth/Registration'
import RegistrationPage from './Pages/RegistrationPage'
import MainPageRoute from './Pages/MainPageRoute'

import AuthPage from './Pages/AuthPage'
import {  ForgetPasswordAndEnterOTP } from './Components/Auth/ForgetPassword'
import { Login } from './Components/Auth/Login'
const App = () => {


  return (
  <>

  <Routes>

    <Route path='/' element={<MainPageRoute/>}/>
    <Route path='/Login' element={<AuthPage/>}/>
    <Route path='/Creationmodel' element={<RegistrationPage/>}/>
    <Route path='/Registration' element={<RegistrationForm/>}/>
    <Route path="/forgetpassword" component={ForgetPasswordAndEnterOTP} />
  </Routes>

  



  </>
  )
}

export default App
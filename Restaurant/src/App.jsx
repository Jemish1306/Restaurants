import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import './App.css'
import './index.css'
import { Registration } from './Components/Auth/Registration'



import {  ForgetPassword } from './Components/Auth/ForgetPassword'
import { Login } from './Components/Auth/Login'
import { Dashboard } from './Components/Admin/Deshboard'
const App = () => {

  return (
  <>

  <Routes>

    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Registration/>}/>
    <Route path="/forgetpassword" element={<ForgetPassword/>} />
    <Route path='/deshbord' element={<Dashboard/>} />
   
  </Routes>

  



  </>
  )
}

export default App
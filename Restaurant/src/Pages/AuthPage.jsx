import React from 'react'
import { Login } from '../Auth/Login'
import  {  ForgetPasswordAndEnterOTP } from './../Auth/ForgetPassword';

const AuthPage = () => {
  return (
    <>
    <div className='grid-cols-2'>
        <Login/>
        {/* <ForgetPassword/> */}
        <ForgetPasswordAndEnterOTP/>
        

    </div>

    
    </>
  )
}

export default AuthPage
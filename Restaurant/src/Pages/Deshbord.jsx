import React from 'react'
import Login from '../Auth/Login'
import ForgetPassword from '../Auth/ForgetPassword'

import RegistrationForm from '../Auth/Registration'
import { Link } from 'react-router-dom'

const Deshbord = () => {
  return (

    <>
    <div className='text-red-400 flex min-h-screen justify-between  '>
    
    <div className='w-1/2  flex items-center flex-col  gap-4'>
      <label>go to REs Compontes</label>


    <button type='button' 
       className='font-serif text-gray-400 font-bold  border flex border-green-400 items-center justify-center w-60 drop-shadow-lg '>  <Link to='./Registration'> RouteRegistraan </Link></button>

     <label className=' ' >
      CReate resto model
     </label>
     <button type='button' className='w-60  font-serif text-green-500 font-bold 
     border-2 hover:bg-green-200 border-dashed border-red-700 items-center justify-center flex
      '><Link to='./Creationmodel'>GO to REgitresan Model </Link></button>
    
    
    </div>

    <Login/>
    
    </div>
    {/* <ForgetPassword/> */}
    </>
    

  )
}

export default Deshbord
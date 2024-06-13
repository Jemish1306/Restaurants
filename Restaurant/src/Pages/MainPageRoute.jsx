/* eslint-disable no-unused-vars */
import React from 'react'

// import ForgetPassword from '../Auth/ForgetPassword'
import bg from '../assets/Img/restobg.jpg'

import { Link } from 'react-router-dom'

const MainPageRoute = () => {
  return (

    <>
    
    <div className=' relative min-h-screen flex items-center  justify-center bg-gray-900 '>

      

  <div className=' absolute inset-0 bg-center bg-cover' 
  style={{backgroundImage:`url(${bg})`,  filter: 'blur(8px)'}}> 

  </div>
  <div className=' relative flex items-center justify-center w-full bg-opacity-90  P-8 rounded  bg-gray-900'>

    

  <div className='text-red-200 flex min-h-screen justify-between max-w-lg font-medium text-xl  '>
    
    <div className='  flex items-center flex-col  gap-4'>

      <p className='text-orange-400 font-medium text-5xl'>Admin Pannal</p>
      <label>go to REs Compontes</label>


    <button type='button' 
       className='w-60  font-serif text-green-500 font-bold 
       border-2 rounded-md hover:border-red-200 shadow-lg shadow-pink-300  border-green-400 items-center justify-center flex '>  <Link to='./Registration'> RouteRegistraan </Link></button>

     <label className=' ' >
      CReate resto Pages
     </label>
     <button type='button' className='w-60  font-serif text-green-500 font-bold 
     border-2 rounded-md hover:border-red-200 shadow-lg shadow-pink-300  border-green-400 items-center justify-center flex
      '><Link to='./Creationmodel'> GO to REgitresan Model </Link></button>
    
    <label>GO TO login PAge</label>
    <button type='button' className='w-60  font-serif text-green-500 font-bold 
     border-2 rounded-md hover:border-red-200 shadow-lg shadow-pink-300  border-green-400 items-center justify-center 
      '><Link to='./Login'> GO to Login Model </Link></button>
   <label>go to Password Screen</label>
   <Link to="./Password">
    <button className='w-60  font-serif text-green-500 font-bold 
     border-2 rounded-md hover:border-red-200 shadow-lg shadow-red-300  border-green-400 items-center justify-center '
    >Forgrt Password</button></Link>
    
    </div>

  
    
    </div>




  </div>





    </div>

   
    {/* <ForgetPassword/> */}
    </>
    

  )
}

export default MainPageRoute
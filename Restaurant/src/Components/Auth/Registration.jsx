import  { useState } from 'react';
import bg from '../../assets/Img/restobg.jpg'
import { Link } from 'react-router-dom';

        

import logo from '../../assets/Img/Group.png'
import RestaurantCreationModal from '../Shared/RestaurantCreationModal';

export function Registration() {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-gray-900 shadow-lg">
      {/* Background with blur and opacity */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-transparent"
        style={{ backgroundImage: `url(${bg})`,filter:'blur(5px)' }}
      ></div>

      {/* Flex container for the split layout */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center  bg-opacity-90 p-8 rounded-lg shadow-lg">
        {/* Left side for the form */}
        <div className="w-full max-w-2xl  rounded-md shadow-lg bg-slate-900 opacity-90">
          <h1 className="text-3xl text-white mb-6 text-center">Registration</h1>
          <form>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 m-8 ">
              <div>
                <label className="block text-white mb-2">First Name</label>
                <input className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" type="text" placeholder="Enter First Name" />
              </div>
              <div>
                <label className="block text-white mb-2">Last Name</label>
                <input className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" type="text" placeholder="Enter Last Name" />
              </div>
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Email Address</label>
              <input className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" type="email" placeholder="Enter Email Address" />
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Phone Number</label>
              <input className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" type="tel" placeholder="Enter Phone Number" />
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
              <div>
                <label className="block text-white mb-2">Country</label>
                <select className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Select Country</option>
                  {/* Add country options here */}
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">State</label>
                <select className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Select State</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">City</label>
                <select className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Select City</option>
                  {/* Add city options here */}
                </select>
              </div>
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Select Restaurant</label>
              <select className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Select Restaurant</option>
                {/* Add restaurant options here */}
              </select>
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Password</label>
              <input className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" type="password" placeholder="Enter Password" />
            </div>
            <div className="mb-4 m-8">
              <label className="block text-white mb-2">Confirm Password</label>
              <input className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" type="password" placeholder="Enter Confirm Password" />
            </div>
            <div className="mb-4 m-8">
              <input type="checkbox" className="mr-2" />
              <label className="text-white">
                I agree to all the <Link to="#" className="text-blue-500">T&C</Link> and <Link to="#" className="text-blue-500">Privacy Policies</Link>.
              </label>
            </div>
            <button className="w-full bg-yellow-500 text-gray-900 p-2   rounded">Register</button>
          </form>
          <p className="mt-4 text-white m-8">
            Already have an account? <Link to="/" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>

      {/* Right side for the logo and text */}
      <div className="relative hidden md:flex w-full md:w-1/2 flex-col items-center justify-center text-center text-white p-8 bg-opacity-50 rounded-r-lg">
        <div className='flex gap-4 items-center'>

        <img src={logo} alt="Restaurants Logo" className="w-24 h-24 mb-4" />
        <h2 className="text-2xl font-bold">Restaurants</h2>

        </div>
        <p className="italic mb-4">Your Tagline</p>
        <p className="max-w-md font-barlow">
          Aenean blandit id nisl et pretium. Sed efficitur lectus ipsum, ac dapibus turpis auctor.
        </p>
      </div>
      <div className='grid '>
      <RestaurantCreationModal/>
      </div>

    </div>
  );
}

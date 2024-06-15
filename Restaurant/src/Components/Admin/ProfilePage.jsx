import React from 'react';
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="bg-gray-800 p-4 w-64">
        <div className="text-2xl font-bold mb-4">RESTAURANTS</div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
            </li>
            <li className="mb-4">
              <Link to="/manage-order" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Order</Link>
            </li>
            <li className="mb-4">
              <Link to="/manage-menu" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Menu</Link>
            </li>
            <li className="mb-4">
              <Link to="/payment-history" className="block py-2 px-4 rounded hover:bg-gray-700">Payment History</Link>
            </li>
            <li className="mb-4">
              <Link to="/qr-codes" className="block py-2 px-4 rounded hover:bg-gray-700">QR Codes</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button className="bg-red-600 w-full py-2 rounded mt-4 hover:bg-red-700">Log Out</button>
        </div>
      </aside>
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
            <p className="text-gray-400">Jd's Restro</p>
          </div>
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Search Here Your Delicious Food..." 
              className="p-2 rounded bg-gray-700 text-white"
            />
            <div className="flex items-center ml-4">
              <span>Musabbir Hossain</span>
              <img src="path/to/profile-image.jpg" alt="Profile" className="rounded-full w-8 h-8 ml-2" />
            </div>
          </div>
        </header>
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <button className="py-2 px-4 bg-yellow-500 rounded mr-2">Profile</button>
            <button className="py-2 px-4 bg-gray-700 rounded mr-2">Change Password</button>
            <button className="py-2 px-4 bg-gray-700 rounded">Terms & Condition</button>
          </div>
          <div className="flex">
            <div className="mr-8">
              <img src="path/to/profile-image.jpg" alt="Profile" className="rounded-full w-32 h-32" />
              <button className="bg-yellow-500 py-2 px-4 rounded mt-4">Edit Profile</button>
            </div>
            <div className="flex-grow">
              <div className="flex mb-4">
                <div className="mr-8 w-1/2">
                  <label className="block mb-1">First Name</label>
                  <input type="text"   className="p-2 bg-gray-700 rounded w-full" />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1">Last Name</label>
                  <input type="text"  className="p-2 bg-gray-700 rounded w-full" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mr-8 w-1/2">
                  <label className="block mb-1">Phone Number</label>
                  <input type="text" className="p-2 bg-gray-700 rounded w-full" />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1">Email Address</label>
                  <input type="text"  className="p-2 bg-gray-700 rounded w-full" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mr-8 w-1/2">
                  <label className="block mb-1">Restaurant Name</label>
                  <input type="text"  className="p-2 bg-gray-700 rounded w-full" />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1">Gender</label>
                  <input type="text" className="p-2 bg-gray-700 rounded w-full" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mr-8 w-1/2">
                  <label className="block mb-1">City</label>
                  <input type="text"  className="p-2 bg-gray-700 rounded w-full" />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1">State</label>
                  <input type="text"  className="p-2 bg-gray-700 rounded w-full" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Address</label>
                <textarea className="p-2 bg-gray-700 rounded w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

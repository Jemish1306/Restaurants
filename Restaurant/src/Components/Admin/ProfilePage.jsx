// src/Components/Admin/ProfilePage.jsx

import React from 'react';

import Layout from './../Shared/Layout';

const ProfilePage = () => {
  return (
    <Layout>
    <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="mb-6 flex justify-center">
        <button className="py-2 px-4 bg-yellow-500 rounded mr-2">Profile</button>
        <button className="py-2 px-4 bg-gray-700 rounded mr-2">Change Password</button>
        <button className="py-2 px-4 bg-gray-700 rounded">Terms & Condition</button>
      </div>
      <div className="flex justify-center mb-6">
        <img src="path/to/profile-image.jpg" alt="Profile" className="rounded-full w-32 h-32" />
      </div>
      <div className="flex justify-center mb-6">
        <button className="bg-yellow-500 py-2 px-4 rounded">Edit Profile</button>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg">
          <div className="flex mb-4">
            <div className="mr-8 w-1/2">
              <label className="block mb-1">First Name</label>
              <input type="text" value="Jenny" readOnly className="p-2 bg-gray-700 rounded w-full" />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">Last Name</label>
              <input type="text" value="Wilson" readOnly className="p-2 bg-gray-700 rounded w-full" />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-8 w-1/2">
              <label className="block mb-1">Phone Number</label>
              <input type="text" value="+91-95354 99872" readOnly className="p-2 bg-gray-700 rounded w-full" />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">Email Address</label>
              <input type="text" value="jenny.wilson@example.com" readOnly className="p-2 bg-gray-700 rounded w-full" />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-8 w-1/2">
              <label className="block mb-1">Restaurant Name</label>
              <input type="text" value="Statesman Restaurant" readOnly className="p-2 bg-gray-700 rounded w-full" />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">Gender</label>
              <input type="text" value="Male" readOnly className="p-2 bg-gray-700 rounded w-full" />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-8 w-1/2">
              <label className="block mb-1">City</label>
              <input type="text" value="Surat" readOnly className="p-2 bg-gray-700 rounded w-full" />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">State</label>
              <input type="text" value="Gujarat" readOnly className="p-2 bg-gray-700 rounded w-full" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address</label>
            <textarea value="A-15 Swastik plaza punagam, varachha, jamnagar, gujrat." readOnly className="p-2 bg-gray-700 rounded w-full" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default ProfilePage;

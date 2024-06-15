import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg text-white">
        <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-2">Order Management</h2>
            <p>Manage orders from here.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-2">User Management</h2>
            <p>Manage users from here.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-2">User Management</h2>
          <Link to='/profilePage'>goto Profile Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
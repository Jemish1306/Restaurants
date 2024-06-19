//Restaurant/src/Components/Sidebar.jsx

import React  from "react";
import {Link} from 'react-router-dom'

const Sidebar =()=>{
    return(
      <aside className="bg-gray-800 p-4 w-64">
      <div className="text-2xl font-bold mb-4 text-yellow-500">RESTAURANTS</div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700 text-yellow-500">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/manage-order" className="block py-2 px-4 rounded hover:bg-gray-700 text-yellow-500">Manage Order</Link>
          </li>
          <li className="mb-4">
            <Link to="/manage-menu" className="block py-2 px-4 rounded hover:bg-gray-700 text-yellow-500">Manage Menu</Link>
          </li>
          <li className="mb-4">
            <Link to="/payment-history" className="block py-2 px-4 rounded hover:bg-gray-700 text-yellow-500">Payment History</Link>
          </li>
          <li className="mb-4">
            <Link to="/qr-codes" className="block py-2 px-4 rounded hover:bg-gray-700 text-yellow-500">QR Codes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className="bg-red-600 w-full py-2 rounded mt-4 hover:bg-red-700 text-white">Log Out</button>
      </div>
    </aside>
    )
}



export default Sidebar;


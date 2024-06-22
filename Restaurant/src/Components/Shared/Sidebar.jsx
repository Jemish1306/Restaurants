//Restaurant/src/Components/Sidebar.jsx


import {Link} from 'react-router-dom'

const Sidebar =()=>{
    return(
      <aside className="bg-secondary p-6 w-64">
      <div className="flex items-center space-x-2 mb-6">
        <img src="path/to/logo.png" alt="Logo" className="w-10 h-10" />
        <div className="text-2xl font-bold text-yellow-500">RESTAURANTS</div>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="block py-2 px-4 text-gray-300 rounded hover:bg-gray-700 hover:text-yellow-500">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/manage-order" className="block py-2 px-4 text-gray-300 rounded hover:bg-gray-700 hover:text-yellow-500">Manage Order</Link>
          </li>
          <li className="mb-4">
            <Link to="/manage-menu" className="block py-2 px-4 text-gray-300 rounded hover:bg-gray-700 hover:text-yellow-500">Manage Menu</Link>
          </li>
          <li className="mb-4">
            <Link to="/payment-history" className="block py-2 px-4 text-gray-300 rounded hover:bg-gray-700 hover:text-yellow-500">Payment History</Link>
          </li>
          <li className="mb-4">
            <Link to="/qr-codes" className="block py-2 px-4 text-gray-300 rounded hover:bg-gray-700 hover:text-yellow-500">QR Codes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className="bg-red-600 text-white w-full py-2 rounded mt-4 hover:bg-red-700">Log Out</button>
      </div>
    </aside>
    )
}



export default Sidebar;


import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const [showOrders, setShowOrders] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  const toggleOrders = () => {
    setShowOrders(!showOrders);
  };

  return (
    <aside className="bg-secondary p-6 w-64">
      <div className="flex items-center space-x-2 mb-6">
        <img src="path/to/logo.png" alt="Logo" className="w-10 h-10" />
        <div className="text-2xl font-bold text-yellow-500">RESTAURANTS</div>
      </div>
      <nav>
        <ul>
          <li className="mb-8">
            <Link to="/dashboard" className="block py-2 px-4 text-gray-300 rounded-xl text-2xl hover:bg-mainbg hover:text-yellow-500">Dashboard</Link>
          </li>
          <li className="mb-8 relative">
            <button 
              className="block w-full text-left py-2 px-4 text-2xl text-gray-300 rounded-xl hover:bg-mainbg hover:text-yellow-500"
              onClick={toggleOrders}
            >
              Manage Order
            </button>
            {showOrders && (
              <ul className="ml-4 mt-2 bg-secondary">
                <li className="mb-2">
                  <Link to="/parcel-order" className="block py-2 px-4 text-gray-300 text-xl rounded-xl hover:bg-mainbg hover:text-yellow-500">Parcel Order</Link>
                </li>
                <li>
                  <Link to="/onsite-order" className="block py-2 px-4 text-gray-300 text-xl rounded-xl hover:bg-mainbg hover:text-yellow-500">Onsite Order</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-8">
            <Link to="/add-item" className="block py-2 px-4 text-gray-300 text-2xl rounded-xl hover:bg-mainbg hover:text-yellow-500">Manage Menu</Link>
          </li>
          <li className="mb-8">
            <Link to="/payment-history" className="block py-2 px-4 text-gray-300 text-2xl rounded-xl hover:bg-mainbg hover:text-yellow-500">Payment History</Link>
          </li>
          <li className="mb-8">
            <Link to="/qr-codes" className="block py-2 px-4 text-gray-300 text-2xl rounded-xl hover:bg-mainbg hover:text-yellow-500">QR Codes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button 
          className="bg-red-600 text-white w-full py-2 rounded mt-4 hover:bg-red-700"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

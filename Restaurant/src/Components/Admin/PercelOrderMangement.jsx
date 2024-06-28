import  { useEffect, useState } from 'react';
import axios from 'axios';

const ParcelOrderManagement = () => {

    const [parcelOrders, setParcelOrders] = useState([]);
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/percelorder')
            .then(response => {
                setAllOrders(response.data);
                const filteredOrders = response.data.filter(order => order.orderType === 'Parcel');
                setParcelOrders(filteredOrders);
            })
            .catch(error => {
                console.error('Error fetching parcel orders:', error);
            });
    }, []);

    

    const updateOrderStatus = (id, status) => {
        axios.put(`http://localhost:5000/api/auth/percelorder/${id}`, { status })
            .then(response => {
                setParcelOrders(parcelOrders.map(order => order._id === id ? response.data : order));
            })
            .catch(error => {
                console.error('Error updating order status:', error);
            });
    };

    return (
        <div className="container bg-mainbg mx-auto p-4">
            <h2 className="text-2xl font-bold  mb-4 text-primary">Request For Payments</h2>
            <table className="min-w-full bg-white border border-gray-300 mb-8">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Customer Name</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Customer Phone</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Date</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Time</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Items</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Quantity</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Total Bill</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.filter(order => order.status === 'Request For Payment').map(order => (
                        <tr key={order._id} className="hover:bg-accent">
                            <td className="py-2 px-4 border-b">{order.customerName}</td>
                            <td className="py-2 px-4 border-b">{order.customerPhone}</td>
                            <td className="py-2 px-4 border-b">{order.date}</td>
                            <td className="py-2 px-4 border-b">{order.time}</td>
                            <td className="py-2 px-4 border-b">{order.items.map(item => item.name).join(', ')}</td>
                            <td className="py-2 px-4 border-b">{order.items.map(item => item.quantity).reduce((a, b) => a + b, 0)}</td>
                            <td className="py-2 px-4 border-b">{order.totalBill}</td>
                            <td className="py-2 px-4 border-b">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => updateOrderStatus(order._id, 'In Progress')}>Mark as In Progress</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-2xl font-bold mb-4 text-primary">In Progress</h2>
            <table className="min-w-full bg-white border border-gray-300 mb-8">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Customer Name</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Customer Phone</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Date</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Time</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Items</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Quantity</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Total Bill</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.filter(order => order.status === 'In Progress').map(order => (
                        <tr key={order._id} className="hover:bg-accent">
                            <td className="py-2 px-4 border-b">{order.customerName}</td>
                            <td className="py-2 px-4 border-b">{order.customerPhone}</td>
                            <td className="py-2 px-4 border-b">{order.date}</td>
                            <td className="py-2 px-4 border-b">{order.time}</td>
                            <td className="py-2 px-4 border-b">{order.items.map(item => item.name).join(', ')}</td>
                            <td className="py-2 px-4 border-b">{order.items.map(item => item.quantity).reduce((a, b) => a + b, 0)}</td>
                            <td className="py-2 px-4 border-b">{order.totalBill}</td>
                            <td className="py-2 px-4 border-b">
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" onClick={() => updateOrderStatus(order._id, 'Delivered')}>Mark as Delivered</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-2xl font-bold mb-4 text-primary">Delivered</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Customer Name</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Customer Phone</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Date</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Time</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Items</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Quantity</th>
                        <th className="py-2 px-4 border-b bg-secondary text-white">Total Bill</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.filter(order => order.status === 'Delivered').map(order => (
                        <tr key={order._id} className="hover:bg-accent">
                            <td className="py-2 px-4 border-b">{order.customerName}</td>
                            <td className="py-2 px-4 border-b">{order.customerPhone}</td>
                            <td className="py-2 px-4 border-b">{order.date}</td>
                            <td className="py-2 px-4 border-b">{order.time}</td>
                            <td className="py-2 px-4 border-b">{order.items.map(item => item.name).join(', ')}</td>
                            <td className="py-2 px-4 border-b">{order.items.map(item => item.quantity).reduce((a, b) => a + b, 0)}</td>
                            <td className="py-2 px-4 border-b">{order.totalBill}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ParcelOrderManagement;

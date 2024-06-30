import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OnsiteOrderManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders')
            .then(response => {
                setOrders(response.data.filter(order => order.orderType === 'Onsite'));
            });
    }, []);

    const updateOrderStatus = (id, status) => {
        axios.put(`/api/orders/${id}`, { status })
            .then(response => {
                setOrders(orders.map(order => order._id === id ? response.data : order));
            });
    };

    return (
        <>
        
        <div>
            <h2>In Progress</h2>
            {orders.filter(order => order.status === 'In Progress').map(order => (
                <div key={order._id}>
                    <p>Table: {order.tableNumber} - {order.customerName} - {order.items.map(item => item.name).join(', ')}</p>
                    <button onClick={() => updateOrderStatus(order._id, 'Delivered')}>Mark as Delivered</button>
                </div>
            ))}

            <h2>Order History</h2>
            {orders.filter(order => order.status === 'Delivered').map(order => (
                <div key={order._id}>
                    <p>Table: {order.tableNumber} - {order.customerName} - {order.items.map(item => item.name).join(', ')}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default OnsiteOrderManagement;

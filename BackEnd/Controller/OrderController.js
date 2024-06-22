const Order = require('../models/Order');
const asyncHandler = require('express-async-handler');

const createOrder = asyncHandler(async (req, res) => {
    const { customerName, customerPhone, items, totalAmount, paymentType } = req.body;

    const order = new Order({
        customerName,
        customerPhone,
        items,
        totalAmount,
        paymentType
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
});

const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.json(orders);
});

const updateOrderStatus = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.status = req.body.status || order.status;
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

module.exports = { createOrder, getOrders, updateOrderStatus };

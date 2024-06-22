const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true
    },
    items: [{
        itemName: String,
        quantity: Number,
        price: Number
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
        enum: ['Cash', 'Online'],
        required: true
    },
    status: {
        type: String,
        enum: ['Request For Payment', 'In Progress', 'Delivered'],
        default: 'Request For Payment'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', OrderSchema);

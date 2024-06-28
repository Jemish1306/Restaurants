//BackEnd/Routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../Controller/OrderController');
const authMiddleware = require('../Middlewares/authMiddleware');

router.post('/', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getAllOrders);
router.get('/:id', authMiddleware, orderController.getOrderById);
router.put('/:id', authMiddleware, orderController.updateOrder);
router.delete('/:id', authMiddleware, orderController.deleteOrder);
router.route("/get").get(orderController.getAllOrders)




module.exports = router;






const express = require('express');
const { getParcelOrders, updateParcelOrderStatus } = require('../Controller/parcelOrderController');

const router = express.Router();

router.get('/percelorder', getParcelOrders);
router.put('/percelorder/:id', updateParcelOrderStatus);

router.route("/").get(getParcelOrders);






module.exports = router;

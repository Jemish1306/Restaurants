const ParcelOrder =require('../Model/ParcelOrderSchema');


const getParcelOrders = async (req, res) => {
    try {
        const orders = await ParcelOrder.find({});
        res.status(201).json(orders);
       console.log('orderssssss', orders)
       
    } catch (err) {

        // res.status(500).json({ msg: 'Server Error'});
      
        console.log("getParcelOredr error")
    }
    
};
console.log('ParcelOrder', ParcelOrder)

const updateParcelOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const order = await ParcelOrder.findById(id);

        if (!order) {
            return res.status(404).json({ msg: 'Order not found' });
        }

        order.status = status;
        await order.save();

        res.json(order);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
};

module.exports = {
    getParcelOrders,
    updateParcelOrderStatus
};

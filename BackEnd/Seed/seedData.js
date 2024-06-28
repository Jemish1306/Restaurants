const connectDB = require('../DB/CannectDB');
const ParcelOrder = require('../Model/ParcelOrderSchema');
const parcelOrderData = require('../parcelOrders.json');
require('dotenv').config();

const startAddData = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
     //   await ParcelOrder.deleteMany(); // Clear existing data
        await ParcelOrder.create(parcelOrderData); // Insert dummy data
        console.log('Database seeded with dummy data');
        process.exit();
    } catch (error) {
        console.error("data seed error",error);
        process.exit(1);
       
    }
};

console.log("data seedeed")

module.exports=startAddData;

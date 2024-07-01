const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const errorMiddleware = require('./Middlewares/errorMiddleware');
const cors = require('cors');
const connectDB = require('./DB/CannectDB.js');
const DataSeed = require('./Seed/seedData.js')

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./Routes/authRoutes.js');
const orderRoutes = require('./Routes/orderRoutes.js');
const { register, login, forgotPassword } = require('./Controller/authController.js');
const parcelOrderRoutes = require('./routes/parcelOrderRoutes.js');
const { getParcelOrders } = require('./Controller/parcelOrderController.js');
const itemroutes=require('./routes/ItemRoutes.js')

// app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth',authRoutes)
app.use('/api/parcel',parcelOrderRoutes)
app.post('/api/auth/register',register );
app.post('/api/auth/login',login);
app.post('/api/auth/forgatepassword',forgotPassword);
app.post('./api/auth/verify-otp' );
app.get('./api/admin/percelorder', getParcelOrders);   //  this frist method  to get api
app.get('/api/admin', parcelOrderRoutes);   /// this second method
app.use('/api',itemroutes)



// Error handling middleware (must be defined after all routes)
app.use(errorMiddleware);
// DATA SEED
DataSeed() ;







app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});

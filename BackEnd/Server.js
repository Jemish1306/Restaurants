const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const errorMiddleware = require('./Middlewares/errorMiddleware');
const cors = require('cors');
const connectDB = require('./DB/CannectDB.js');
// Load environment variables from .env file
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
const { register, login } = require('./Controller/authController.js');


// app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth',authRoutes)
app.post('/api/auth/register', register);
app.post('/api/auth/login',login)

// Error handling middleware (must be defined after all routes)
app.use(errorMiddleware);

// Database connection

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('MongoDB connected');
//     // Start the server
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1); // Exit process with failure
//   });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

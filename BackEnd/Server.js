const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const errorMiddleware = require('./Middlewares/errorMiddleware');
const cors=require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./Routes/authRoutes.js');
const orderRoutes = require('./Routes/orderRoutes.js');
const { register } = require('./Controller/authController.js');

// const userRoutes = require('./Routes/');
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.post('/api/auth/register',register);
// app.use('/api/users', userRoutes);

// Error handling middleware (must be defined after all routes)
app.use(errorMiddleware);
// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB je connected');
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1); // Exit process with failure
});

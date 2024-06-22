//BackEnd/DB/CannectDB.js
require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

mongoose.connection.once("open", () => {
  console.log("Database connection opened");
});

module.exports = connectToDatabase;

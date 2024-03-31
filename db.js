// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');
// // step-1:define mongo db connection url
// const mongourl = 'mongodb://localhost:27017/hotels';

// //step-2:setup mongodb connection
// mongoose.connect(mongourl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// //step-3 :
// //get the default connection
// //mongoose maintains an default connection object representing the mingodb connection
// const db = mongoose.connection;   //this db is require because it maintain the connnection bw database serveer

// //step-4
// //define an event listeners for database connecction

// db.on('connected', () => {
//   console.log('connected to the mongdb server');
// });

// db.on('error', (err) => {
//   console.log('error to the mongdb server :', err);
// });

// db.on('disconnected', () => {
//   console.log('mongdb server disconnected');
// });

// // Check if Mongoose is connected
// if (mongoose.connection.readyState === 1) {
//   console.log('Mongoose is connected to MongoDB');
// } else {
//   console.log('Mongoose is not connected to MongoDB');
// }

// //export the database connection
// module.exports=db;
/////////////////

////////////////////////
const mongoose = require("mongoose");
const express = require("express");

const mongoUrl = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoUrl, {});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to the MongoDB server");
});

db.on("error", (err) => {
  console.log("Error in the MongoDB server:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from the MongoDB server");
});

// Handle process termination (SIGINT signal)
process.on('SIGINT', async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err);
    process.exit(1);
  }
});

module.exports=db

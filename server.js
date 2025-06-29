// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');

const mongoose = require('mongoose');
const productsRoutes = require('./routes'); // Import the product routes
 


// Initialize Express app
const app = express();
app.use(express.json());


const mongoUri = 'mongodb://localhost:27017/productsdb';
const PORT = 3000;

 // Replace with your MongoDB URI
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.use('/', productsRoutes); // Use the product routes
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
 








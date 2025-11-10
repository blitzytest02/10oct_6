// Import the Express.js framework
const express = require('express');

// Initialize the Express application
const app = express();

// Configure the server port (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// Define the root route that returns our hello message
// This demonstrates basic Express.js routing with a simple text response
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Define the evening route that returns a greeting message
// This shows how to add multiple endpoints to an Express.js application
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server and listen for incoming requests
// The callback function confirms the server is running and displays the URL
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Import the Express.js framework
const express = require('express');

// Initialize the Express application
const app = express();

// Configure the server port (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint handler
 * Returns a simple "Hello world" greeting message.
 * This demonstrates basic Express.js routing with a simple text response.
 * 
 * @route GET /
 * @param {Object} req - Express request object containing request data
 * @param {Object} res - Express response object for sending responses
 * @returns {void} Sends "Hello world" as plain text response
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Evening endpoint handler
 * Returns a "Good evening" greeting message.
 * This shows how to add multiple endpoints to an Express.js application.
 * 
 * @route GET /evening
 * @param {Object} req - Express request object containing request data
 * @param {Object} res - Express response object for sending responses
 * @returns {void} Sends "Good evening" as plain text response
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Start the Express server
 * Binds the application to the specified PORT and begins listening for incoming HTTP requests.
 * Displays a confirmation message with the server URL when successfully started.
 * 
 * @callback serverStartCallback
 * @returns {void} Logs server startup confirmation to console
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

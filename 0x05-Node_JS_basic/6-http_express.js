// 6-http_express.js file
const express = require('express'); // Import the Express module

const app = express(); // Create an instance of an Express application
const port = 1245; // Define the port number to listen on

// Define a route for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send the response "Hello Holberton School!" for the root path
});

// Start the HTTP server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message when the server starts
});

// Export the Express application instance
module.exports = app;

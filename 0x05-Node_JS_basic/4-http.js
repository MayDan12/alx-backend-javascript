// 4-http.js file
const http = require('http');

// This define the host and port for the server
const host = '127.0.0.1';
const port = 1245;

// Create a new HTTP server instance
const app = http.createServer((req, res) => {
  // Set the HTTP status code to 200 (OK)
  res.statusCode = 200;
  // Set the response header to plain text
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body with the message "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Start the server and make it listen on the specified port and host
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

// Export the app so it can be used in other modules
module.exports = app;

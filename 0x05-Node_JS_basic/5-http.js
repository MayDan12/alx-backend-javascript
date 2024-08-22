// 5-http.js files
const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Define the host and port for the server
const host = '127.0.0.1';
const port = 1245;

// Create a new HTTP server instance
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    // Handle requests to the root URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    // Handle requests to the /students URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Get the database file path from command line arguments
    const database = process.argv[2];

    // Use the countStudents function to read the student data
    countStudents(database)
      .then((output) => {
        res.write('This is the list of our students\n');
        res.end(output);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    // Handle other URLs
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Start the server and make it listen on the specified port and host
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

// Export the app so it can be used in other modules
module.exports = app;

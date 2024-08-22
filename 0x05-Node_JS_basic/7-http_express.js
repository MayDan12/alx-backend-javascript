// 7-http_express.js file
const express = require("express"); // Import the Express module
const fs = require("fs"); // Import the fs (filesystem) module
const countStudents = require("./3-read_file_async"); // Import the countStudents function

const app = express(); // Create an instance of an Express application
const port = 1245; // Define the port number to listen on

// Define a route for the root path '/'
app.get("/", (req, res) => {
  res.send("Hello Holberton School!"); // Send the response "Hello Holberton School!" for the root path
});

// Define a route for the /students path
app.get("/students", (req, res) => {
  const database = process.argv[2]; // Get the database file path from the command line arguments

  // Check if the database file is provided and exists
  if (!database || !fs.existsSync(database)) {
    res.status(500).send("Cannot load the database"); // Send an error message if the database is not available
  } else {
    res.write("This is the list of our students\n"); // Write the initial message to the response

    countStudents(database)
      .then((data) => {
        res.write(data); // Write the student data to the response
        res.end(); // End the response
      })
      .catch((error) => {
        // Ensure the response ends only once by not attempting to set headers again if already sent
        if (!res.headersSent) {
          // Send an error message if there is an issue reading the database
          res.status(500).send(error.message);
        }
      });
  }
});

// Start the HTTP server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message when the server starts
});

// Export the Express application instance
module.exports = app;

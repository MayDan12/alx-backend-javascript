// const displayMessage = require("./0-console");

// displayMessage("Hello NodeJS!");
// const countStudents = require("./2-read_file");

// countStudents("database.csv");
const countStudents = require("./3-read_file_async");

countStudents("database.csv")
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });
console.log("After!");

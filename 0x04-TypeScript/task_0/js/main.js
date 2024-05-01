"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var student1 = {
    firstName: "Danny",
    lastName: "Mayo",
    age: 20,
    location: 'lagos',
};
var student2 = {
    firstName: "Ranmi",
    lastName: "Precious",
    age: 19,
    location: 'lagos',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
// Create a header row
var headerRow = document.createElement('tr');
// Create header cells for first name and location
var firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
var locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
// Append the header cells to the header row
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
// Append the header row to the table
table.appendChild(headerRow);
// Iterate over the studentsList array and append a new row for each student
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    // Create cells for first name and location
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    // Append the row to the table
    table.appendChild(row);
});
// Append the table to the document body or any other desired element
document.body.appendChild(table);
// export let table = document.createElement('table');
// studentsList.forEach(student => {
//   let row = document.createElement('tr');
//   let name = document.createElement('th')
//   name.textContent = 'FirstName'
//   let loc = document.createElement('th')
//   loc.textContent = 'Location'
//   let firstNameCell = document.createElement('td');
//   firstNameCell.textContent = student.firstName;
//   let locationCell = document.createElement('td');
//   locationCell.textContent = student.location;
//   row.appendChild(firstNameCell);
//   row.appendChild(locationCell);
//   row.appendChild(name)
//   row.appendChild(loc)
//   table.appendChild(row);
// });
// document.body.appendChild(table);

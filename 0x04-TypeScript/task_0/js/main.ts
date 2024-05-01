export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "Danny",
  lastName: "Mayo",
  age: 20,
  location: 'lagos',
};

const student2: Student = {
  firstName: "Ranmi",
  lastName: "Precious",
  age: 19,
  location: 'lagos',
};

const studentsList: Student[] = [student1, student2];

let table = document.createElement('table');

// Create a header row
let headerRow = document.createElement('tr');

// Create header cells for first name and location
let firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
let locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

// Append the header cells to the header row
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

// Append the header row to the table
table.appendChild(headerRow);

// Iterate over the studentsList array and append a new row for each student
studentsList.forEach(student => {
  let row = document.createElement('tr');
  
  // Create cells for first name and location
  let firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  let locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  
  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  // Append the row to the table
  table.appendChild(row);
});

// Append the table to the document body or any other desired element
document.body.appendChild(table);

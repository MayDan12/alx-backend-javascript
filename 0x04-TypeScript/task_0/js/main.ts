interface Student {
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

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");

  // Iterate over the students array and append a new row for each student
  studentsList.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
});

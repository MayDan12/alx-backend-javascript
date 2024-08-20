const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if the file is empty
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove the header line
    const headers = lines.shift().split(',');

    const students = lines.map((line) => {
      const values = line.split(',');
      const student = {};
      headers.forEach((header, index) => {
        student[header] = values[index];
      });
      return student;
    });

    // Count the number of students
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    // Count the number of students by field
    const fields = {};
    students.forEach((student) => {
      const { field, firstname } = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

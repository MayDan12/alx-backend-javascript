const fs = require('fs').promises;

/**
 * The count Count students from a CSV file asynchronously.
 *
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 * @throws {Error} - If the database cannot be loaded.
 */
function countStudents(path) {
  return fs
    .readFile(path, 'utf-8') // Read the file asynchronously
    .then((data) => {
      // Split the file into lines, filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Throw an error if the file is empty
      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }

      // Extract headers and remove them from the lines array
      const headers = lines.shift().split(',');

      // Map the remaining lines to student objects
      const students = lines.map((line) => {
        const values = line.split(',');
        const student = {};
        headers.forEach((header, index) => {
          student[header] = values[index];
        });
        return student;
      });

      // Count the total number of students
      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      // Count and display the number of students in each field
      const fields = {};
      students.forEach((student) => {
        const { field, firstname } = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      // Output the number of students in each field
      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ', ',
          )}`,
        );
      }
    })
    .catch(() => {
      // Throw an error if the file cannot be read or processed
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;

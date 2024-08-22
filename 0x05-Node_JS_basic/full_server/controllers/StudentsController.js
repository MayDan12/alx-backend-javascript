import { readDatabase } from '../utils.js';

export default class StudentsController {
    static async getAllStudents(req, res) {
        const filePath = process.argv[2];
        try {
            const studentData = await readDatabase(filePath);
            let responseText = 'This is the list of our students\n';
            
            Object.keys(studentData).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach((field) => {
                responseText += `Number of students in ${field}: ${studentData[field].length}. List: ${studentData[field].join(', ')}\n`;
            });

            res.status(200).send(responseText.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const filePath = process.argv[2];
        const major = req.params.major;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const studentData = await readDatabase(filePath);
            const students = studentData[major] || [];
            res.status(200).send(`List: ${students.join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

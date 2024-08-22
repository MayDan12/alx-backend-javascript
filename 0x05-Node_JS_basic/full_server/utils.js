import fs from 'fs/promises';

export async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const lines = data.trim().split('\n').slice(1); // Remove the header
        const studentData = {};

        for (const line of lines) {
            const [firstname, , , field] = line.split(',');
            if (!studentData[field]) {
                studentData[field] = [];
            }
            studentData[field].push(firstname);
        }

        return studentData;
    } catch (error) {
        throw new Error(`Cannot load the database ${error.message}`);
    }
}

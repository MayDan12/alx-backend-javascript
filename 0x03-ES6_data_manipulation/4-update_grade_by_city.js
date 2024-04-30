export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((student) => student.location === city)
    .map((student) => {
      const objGrade = newGrades.find((grade) => grade.studentId === student.id);
      const Grade = objGrade ? objGrade.grade : 'N/A';
      return {
        ...student,
        grade: Grade,
      };
    });
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((element) => {
      const elt = element;
      for (const gradeObj of newGrades) {
        if (elt.id === gradeObj.studentId) {
          elt.grade = gradeObj.grade;
          break;
        } else {
          elt.grade = 'N/A';
        }
      }
      return Object.assign(element, elt);
    });
}

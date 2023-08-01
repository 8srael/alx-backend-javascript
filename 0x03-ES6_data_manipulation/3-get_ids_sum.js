export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  return students.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
}

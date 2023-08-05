// Define an interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students

const firstStudent: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York'
}

const secondStudent: Student = {
  firstName: 'Martin',
  lastName: 'King',
  age: 23,
  location: 'Paris'
}

// Creating an array of students
const studentsList: Array<Student> = [firstStudent, secondStudent];

// Creating a table and inserting the students first name and location
const table = document.querySelector('#students-table');

//check if table is an instance of HTMLTableElement
if (table instanceof HTMLTableElement) {
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
  });
}


export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students) === false) {
      throw TypeError('Students must be an array of strings');
    }
    for (const student of students) {
      if (typeof student !== 'string' || Number.isNaN(Number(student)) === false) {
        throw TypeError('Array must contain only strings');
      }
    }
    this._students = students;
  }
}

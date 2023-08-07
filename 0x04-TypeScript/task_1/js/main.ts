// 1. Let's build a Teacher interface

export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [property: string]: any;
}

// 2. Extending the Teacher class Inteface
export interface Directors extends Teacher {
  numberOfReports: number;  
}

// 3. printing teachers
export function printTeacher (firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export interface printTeacherFunction{ 
  (firstName: string, lastName: string): string;
}

// 4. Writing a class

// Create an interface StudentClassConstructor
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Create an interface StudentClassInterface
export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// write a student class named StudentClass
export class StudentClass implements StudentClassInterface {
  private _firstName!: string;
  private _lastName!: string;
    
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this._firstName;
  }
}

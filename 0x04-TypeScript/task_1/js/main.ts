export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}



export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}, ${lastName}`
}


interface Student {
  workOnHomework(): string;
  displayName(): string;
}


export class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working on homework"
  }

  displayName(): string {
    return this.firstName;
  }
}
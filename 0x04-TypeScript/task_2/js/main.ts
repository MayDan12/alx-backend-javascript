export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }

  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

export function createEmployee(salary: string | number) {
  if (typeof salary === 'number' && salary < 500) {
    return Teacher;
  } else {
    return Director;
  }
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));

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

export function createEmployee(salary: string | number): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
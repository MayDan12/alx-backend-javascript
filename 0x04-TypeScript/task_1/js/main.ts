interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

function createTeacher(options: Partial<Teacher>): Teacher {
  const { firstName, lastName, fullTimeEmployee, location, yearsOfExperience, ...rest } = options;
  const teacher: Teacher = {
    firstName: firstName!,
    lastName: lastName!,
    fullTimeEmployee: fullTimeEmployee!,
    location: location!,
    ...rest,
  };
  if (yearsOfExperience !== undefined) {
    teacher.yearsOfExperience = yearsOfExperience;
  }
  return teacher;
}

const teacher3: Teacher = createTeacher({
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional attribute
});

console.log(teacher3);


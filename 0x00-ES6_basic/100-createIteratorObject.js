export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = [];
  for (const dept of departments) {
    employees.push(...dept);
  }

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employees.length) {
        const value = employees[currentIndex];
        currentIndex++;
        return { value, done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

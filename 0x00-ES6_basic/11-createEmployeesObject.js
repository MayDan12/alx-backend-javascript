export default function createEmployeesObject(departmentName, employees) {
  const employObject = {};
  employObject[departmentName] = employees;
  return employObject;
}

export default function getStudentsByLocation(array, city) {
  const res = array.filter((ele) => ele.location === city);
  return res;
}

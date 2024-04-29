export default function getStudentIdsSum(array) {
  return array.reduce((sum, ele) => sum + ele.id, 0);
}

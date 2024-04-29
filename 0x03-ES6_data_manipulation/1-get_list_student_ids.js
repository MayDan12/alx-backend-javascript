export default function getListStudentIds(array) {
  const idlist = [];
  if (array instanceof Array) {
    array.map((id) => idlist.push(id.id));
  } else {
    return [];
  }
  return idlist;
}

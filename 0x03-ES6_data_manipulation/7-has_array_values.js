export default function hasValuesFromArray(setobj, array) {
  for (const element of array) {
    if (!setobj.has(element)) {
      return false;
    }
  }
  return true;
}

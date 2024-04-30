export default function cleanSet(setobj, startstring) {
  const valuesStartingWithPrefix = [];
  setobj.forEach((value) => {
    if (value.startsWith(startstring)) {
      valuesStartingWithPrefix.push(value.slice(startstring.length));
    } else {
      setobj.clear();
    }
  });
  return valuesStartingWithPrefix.join('-');
}

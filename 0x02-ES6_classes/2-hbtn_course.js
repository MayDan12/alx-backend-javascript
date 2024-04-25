export default class HolbertonCourse {
  constructor(name, length, [...arr]) {
    this._name = name;
    this._length = length;
    this._students = [...arr];
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  set name(value) {
    if (typeof value === 'number') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = value;
  }
}

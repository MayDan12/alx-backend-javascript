"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = exports.Teacher = exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return Teacher;
    }
    else {
        return Director;
    }
}
exports.createEmployee = createEmployee;
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

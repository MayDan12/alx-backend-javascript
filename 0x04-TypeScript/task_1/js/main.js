var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function createTeacher(options) {
    var firstName = options.firstName, lastName = options.lastName, fullTimeEmployee = options.fullTimeEmployee, location = options.location, yearsOfExperience = options.yearsOfExperience, rest = __rest(options, ["firstName", "lastName", "fullTimeEmployee", "location", "yearsOfExperience"]);
    var teacher = __assign({ firstName: firstName, lastName: lastName, fullTimeEmployee: fullTimeEmployee, location: location }, rest);
    if (yearsOfExperience !== undefined) {
        teacher.yearsOfExperience = yearsOfExperience;
    }
    return teacher;
}
var teacher3 = createTeacher({
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false, // Additional attribute
});
console.log(teacher3);

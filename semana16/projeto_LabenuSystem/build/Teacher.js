"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEACHER_SPECIALITY = exports.Teacher = void 0;
class Teacher {
    constructor(id, name, email, birthDate, specialties) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.specialties = specialties;
    }
}
exports.Teacher = Teacher;
var TEACHER_SPECIALITY;
(function (TEACHER_SPECIALITY) {
    TEACHER_SPECIALITY["REACT"] = "REACT";
    TEACHER_SPECIALITY["REDUX"] = "REDUX";
    TEACHER_SPECIALITY["CSS"] = "CSS";
    TEACHER_SPECIALITY["TESTES"] = "TESTES";
    TEACHER_SPECIALITY["TYPESCRIPT"] = "TYPESCRIPT";
    TEACHER_SPECIALITY["OOP"] = "OOP";
    TEACHER_SPECIALITY["BACKEND"] = "BACKEND";
})(TEACHER_SPECIALITY = exports.TEACHER_SPECIALITY || (exports.TEACHER_SPECIALITY = {}));
//# sourceMappingURL=Teacher.js.map
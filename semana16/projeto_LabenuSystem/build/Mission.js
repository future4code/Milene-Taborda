"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
const moment = require("moment");
class Mission {
    constructor(id, startDate, endDate, teachers = [], students = [], currentModule = undefined) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
        this.name = "";
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStudents() {
        return this.students;
    }
    getTeacher() {
        return this.teachers;
    }
    getAgeById(id) {
        this.students.find((student) => {
            if (id === student.id) {
                return console.log(moment().diff(student.birthDate, "year"));
            }
        });
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    getCurrentModule() {
        return this.currentModule;
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student) {
        this.students.push(student);
    }
    setName(name) {
        this.name = name;
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map
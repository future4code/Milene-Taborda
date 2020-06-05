"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainTaskManager = void 0;
const FileManager_1 = require("./FileManager");
const moment = require("moment");
const jsonStudents = new FileManager_1.FileManager("students.json");
const jsonTeachers = new FileManager_1.FileManager("teachers.json");
const jsonMissions = new FileManager_1.FileManager("missions.json");
class MainTaskManager {
    constructor() {
        this.allStudents = require("../students.json");
        this.allTeachers = require("../teachers.json");
        this.allMissions = require("../missions.json");
    }
    setStudents(newStudent) {
        const exist = this.allStudents.find((student) => {
            return student.id === newStudent.id;
        });
        if (exist) {
            console.log("Estudante já cadastrado.");
        }
        else {
            this.allStudents.push(newStudent);
            jsonStudents.writeFile(this.allStudents);
        }
    }
    setTeacher(newTeacher) {
        const exist = this.allTeachers.find((teacher) => {
            return teacher.id === newTeacher.id;
        });
        if (exist) {
            console.log("Professor já cadastrado.");
        }
        else {
            this.allTeachers.push(newTeacher);
            jsonTeachers.writeFile(this.allTeachers);
        }
    }
    setMission(newMission) {
        const exist = this.allMissions.find((mission) => {
            return mission.id === newMission.getId();
        });
        if (exist) {
            console.log("Missão já existente.");
        }
        else {
            this.allMissions.push(newMission);
            jsonMissions.writeFile(this.allMissions);
            console.log();
        }
    }
    printStudents() {
        this.allStudents.map((student) => {
            const age = Math.floor(moment(new Date()).diff(moment(student.birthDate), 'years', true));
            return console.log(`Nome: ${student.name}
        Email: ${student.email}
        Curso: Web Full Stack Development
        Idade: ${age}
        Turma: ${""}
        `);
        });
    }
    getStudents() {
        return this.allStudents;
    }
    getTeacher() {
        return this.allTeachers;
    }
    getMission() {
        return this.allMissions;
    }
}
exports.MainTaskManager = MainTaskManager;
//# sourceMappingURL=MainTaskManager.js.map
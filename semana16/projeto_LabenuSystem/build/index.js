"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Students_1 = require("./Students");
const Teacher_1 = require("./Teacher");
const moment = require("moment");
const FullTimeMission_1 = require("./FullTimeMission");
const NightMission_1 = require("./NightMission");
const MainTaskManager_1 = require("./MainTaskManager");
const istanceMainTaskManager = new MainTaskManager_1.MainTaskManager();
let arrayStudent = istanceMainTaskManager.getStudents();
let arrayTeacher = istanceMainTaskManager.getTeacher();
function createNewStudent(id, name, email, birthDate, hobbies) {
    const newStudent = new Students_1.Student(id, name, email, birthDate, hobbies);
    istanceMainTaskManager.setStudents(newStudent);
}
;
function createNewTeacher(id, name, email, birthDate, specialities) {
    const newTeacher = new Teacher_1.Teacher(id, name, email, birthDate, specialities);
    istanceMainTaskManager.setTeacher(newTeacher);
}
;
function createNewMission(fullTime, id, name, startDate, endDate, teachers, students, currentModule) {
    let mission = FullTimeMission_1.FullTimeMission;
    if (!fullTime) {
        mission = NightMission_1.NightMission;
    }
    const newMission = new mission(id, startDate, endDate, teachers, students);
    newMission.setName(name);
    istanceMainTaskManager.setMission(newMission);
}
createNewStudent("9", "Wood", "wood@labenu.com.br", moment("23/12/1998", "DD/MM/YYYY"), ["Voar"]);
createNewStudent("8", "Wood", "wood@labenu.com.br", moment("23/12/1998", "DD/MM/YYYY"), ["Voar"]);
createNewTeacher("123456", "Sot", "sot@labenu.com.br", moment("01/01/2001", "DD/MM/YYYY").format("L"), [Teacher_1.TEACHER_SPECIALITY.REACT]);
createNewMission(true, "123", "Hamilton", moment(), moment(), arrayTeacher, arrayStudent, 1);
istanceMainTaskManager.printStudents();
//# sourceMappingURL=index.js.map
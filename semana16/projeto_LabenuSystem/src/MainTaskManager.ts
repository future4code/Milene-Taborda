import { Student } from "./Students";
import { Teacher } from "./Teacher";
import { Mission } from "./Mission";
import { FileManager } from "./FileManager";
import * as moment from 'moment'

const jsonStudents = new FileManager("students.json");
const jsonTeachers = new FileManager("teachers.json");
const jsonMissions = new FileManager("missions.json");

export class MainTaskManager {
  private allStudents: Student[] = require("../students.json");
  private allTeachers: Teacher[] = require("../teachers.json");
  private allMissions: Mission[] = require("../missions.json");

  setStudents(newStudent: Student): void {
    const exist = this.allStudents.find((student: any) => {
      return student.id === newStudent.id
    });

    if(exist) {
      console.log("Estudante já cadastrado.");
    } else {
      this.allStudents.push(newStudent);
      jsonStudents.writeFile(this.allStudents);
    }
  }

  setTeacher(newTeacher: Teacher): void {
    const exist = this.allTeachers.find((teacher: any) => {
      return teacher.id === newTeacher.id
    });

    if(exist) {
      console.log("Professor já cadastrado.")
    } else {
      this.allTeachers.push(newTeacher);
      jsonTeachers.writeFile(this.allTeachers);
    }
  }

  setMission(newMission: Mission): void {
    const exist = this.allMissions.find((mission: any) => {
      return mission.id === newMission.getId();
    });

    if(exist) {
      console.log("Missão já existente.")
    } else {
      this.allMissions.push(newMission);
      jsonMissions.writeFile(this.allMissions);
      console.log()
    }
  }

  printStudents(): void {
    this.allStudents.map((student: any) => {
      const age = Math.floor(moment(new Date()).diff(moment(student.birthDate),'years',true));


      return console.log(
        `Nome: ${student.name}
        Email: ${student.email}
        Curso: Web Full Stack Development
        Idade: ${age}
        Turma: ${""}
        `
      );
    })
  }

  getStudents(): any {
    return this.allStudents
  }
  getTeacher(): any {
   return  this.allTeachers
  }
  getMission(): any {
   return  this.allMissions
  }
}
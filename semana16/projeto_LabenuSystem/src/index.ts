import { Student } from "./Students";
import {TEACHER_SPECIALITY, Teacher} from './Teacher'
import * as moment from 'moment';
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";
import { MainTaskManager } from "./MainTaskManager";

const istanceMainTaskManager = new MainTaskManager()

let arrayStudent: Student[] = istanceMainTaskManager.getStudents();
let arrayTeacher: Teacher[] = istanceMainTaskManager.getTeacher();

function createNewStudent( id: string, name: string, email: string, birthDate: moment.Moment, hobbies: string[]) {
  const newStudent =  new Student(id, name,email, birthDate, hobbies);
 
  istanceMainTaskManager.setStudents(newStudent);
};

function createNewTeacher(id: string, name: string, email: string, birthDate: moment.Moment, specialities: TEACHER_SPECIALITY[]) {
  const newTeacher = new Teacher(id, name, email, birthDate, specialities);
  
  istanceMainTaskManager.setTeacher(newTeacher);
};

function createNewMission(
  fullTime: boolean,
  id: string, 
  name: string, 
  startDate: moment.Moment, 
  endDate: moment.Moment, 
  teachers: Teacher[],
  students: Student[],
 currentModule?: number  
) {
  let mission = FullTimeMission;

  if(!fullTime) {
    mission = NightMission;
  }
  const newMission = new mission(id, startDate, endDate, teachers, students);
  newMission.setName(name)
  istanceMainTaskManager.setMission(newMission);
}

createNewStudent("9", "Wood", "wood@labenu.com.br", moment("23/12/1998", "DD/MM/YYYY"), ["Voar"] );
createNewStudent("8", "Wood", "wood@labenu.com.br", moment("23/12/1998", "DD/MM/YYYY"), ["Voar"] );
createNewTeacher("123456", "Sot", "sot@labenu.com.br",  moment("01/01/2001", "DD/MM/YYYY"), [TEACHER_SPECIALITY.REACT]);
createNewMission(true, "123", "Hamilton", moment(), moment(), arrayTeacher, arrayStudent, 1);


istanceMainTaskManager.printStudents()

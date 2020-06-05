import { User } from "./User";

export class Teacher implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: moment.Moment,
    public specialties: TEACHER_SPECIALITY[] 
  ) {}
}

export enum TEACHER_SPECIALITY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

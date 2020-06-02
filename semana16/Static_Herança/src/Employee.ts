import { User } from "./User";

export class Employee extends User {
  protected admissionDate: Date;
  protected baseSalary: number
  static BENEFITS_VALUE: number = 400
  
  constructor( id: string, name: string, email: string, password: string, admissionDate: Date, baseSalary: number) {
    super(id, name, email, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }
  
  getAdmissionDate(): Date {
    return this.admissionDate
  }

  getBaseSalary(): number {
    return this.baseSalary
  }

  getCalculateTotalSalary(): number {
    return this.baseSalary + Employee. BENEFITS_VALUE
  }

  sayJob() {}
}




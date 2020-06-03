"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const User_1 = require("./User");
let Employee = (() => {
    class Employee extends User_1.User {
        constructor(id, name, email, password, admissionDate, baseSalary) {
            super(id, name, email, password);
            this.admissionDate = admissionDate;
            this.baseSalary = baseSalary;
        }
        getAdmissionDate() {
            return this.admissionDate;
        }
        getBaseSalary() {
            return this.baseSalary;
        }
        getCalculateTotalSalary() {
            return this.baseSalary + Employee.BENEFITS_VALUE;
        }
    }
    Employee.BENEFITS_VALUE = 400;
    return Employee;
})();
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map
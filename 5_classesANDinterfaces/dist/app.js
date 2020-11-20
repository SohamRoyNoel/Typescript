"use strict";
class Department {
    constructor(name, i) {
        this.name = name;
        this.i = i;
        this.employees = [];
    }
    setEmployee(nm) {
        this.employees.push(nm);
    }
    getEmployee() {
        console.log(this.employees);
    }
    department() {
        console.log(`Dept : ${this.name} and ${this.i}`);
    }
}
const dept = new Department('Developer', 10);
console.log(dept);
dept.department();
dept.setEmployee('Anny');
dept.setEmployee('Merry');
dept.getEmployee();

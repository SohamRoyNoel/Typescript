"use strict";
class Department {
    constructor(name, i) {
        this.name = name;
        this.i = i;
        this.employees = [];
    }
    static employee(val) {
        return `${val} employee is a MERN Developer`;
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
        this.lastAdmin = '';
    }
    departmentDetails(val) {
        console.log(`I am from Abstract Class : ${val}`);
    }
    get getLastAdmin() {
        if (this.lastAdmin) {
            return this.lastAdmin;
        }
        throw new Error('No Admin IS created');
    }
    set setLastAdmin(value) {
        if (!value) {
            throw new Error('Are you crazy! Giving me a shitty null');
        }
        this.setAdmins(value);
    }
    static getInstance() {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment(10, []);
        return this.instance;
    }
    setEmployee(nm) {
        if (nm === 'Soham') {
            return;
        }
        this.employees.push(nm);
    }
    setAdmins(admin) {
        this.admins.push(admin);
        this.lastAdmin = admin;
    }
    getAdmins() {
        console.log(`Admins are ${this.admins}`);
    }
}
const dept = ITDepartment.getInstance();
dept.getAdmins();
console.log(dept);
dept.department();
dept.setEmployee('Soham');
dept.setEmployee('Candy');
dept.getEmployee();
dept.setAdmins('Ivy');
dept.setLastAdmin = 'Soham';
console.log("VAL from getter setter " + dept.getLastAdmin);
console.log(Department.employee('Soham Roy'));
dept.departmentDetails('Development Team');

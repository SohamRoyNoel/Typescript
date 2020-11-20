class Department {
  // name: string;
  // id: number;
  private employees: string[] = [];

  // properties defination can be restricted on constructor level also
  constructor(private name: string, public i: number) {
    // this.name = dept,
    // this.id = i
  }

  setEmployee(nm: string) {
    this.employees.push(nm);
  }

  getEmployee(){
    console.log(this.employees);
  }

  // this type asks exacts same blueprint
  department(this: Department){
    console.log(`Dept : ${this.name} and ${this.i}`);
  }
  
}

const dept = new Department('Developer', 10);

console.log(dept);

dept.department();

dept.setEmployee('Anny');
dept.setEmployee('Merry');

// dept.employees[2] = 'Enrique'; // Now you have a sweet little error

dept.getEmployee();

// this conflict: 
// const copyDepartment = { department: dept.department };

// console.log(copyDepartment.department());

// Now i have to pass same type
// const copyDepartment = { name: 'Wassex', department: dept.department };
// 
// copyDepartment.department();
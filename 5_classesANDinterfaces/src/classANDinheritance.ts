abstract class Department {
  // name: string;
  // id: number;

  // Accessors
  // private employees: string[] = [];
  protected employees: string[] = [];

  // properties defination can be restricted on constructor level also
  constructor(private name: string, public i: number) {
    // this.name = dept,
    // this.id = i
  }

  // Static
  static employee(val: string){
    return `${val} employee is a MERN Developer`;
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

  // ABSTRACT METHOD : a method that has only Signature : will be implemented by CHILD class
  abstract departmentDetails(val : string) : void;
  
}

// Interface
class ITDepartment extends Department {

  // SINGLETON Pattern:: INSTANCE property
  private static instance: ITDepartment;

  // IMPLEMENTING abstract METHOD
  departmentDetails(val: string): void {
    console.log(`I am from Abstract Class : ${val}`)
  }

  // private property that can be accessed by GETTER & SETTER
  private lastAdmin : string;

  // GETTER & SETTER
  get getLastAdmin(){
    if(this.lastAdmin){
      return this.lastAdmin;
    }
    throw new Error('No Admin IS created')
  }

  // this way Admin array can be established
  set setLastAdmin(value: string){
    if(!value){
      throw new Error('Are you crazy! Giving me a shitty null');
    }
    this.setAdmins(value);
  }

  // we can make a constructor as private: this way we will use a STATIC method to get the ITDepartment instance :: Singleton Pattern
  private constructor(id: number, public admins: string[]){
    super('IT', id); // calls the constructor of the base class so signature should be same
    this.lastAdmin = '';
  }

  // define the STATIC method that returns an instance of the class :: Singleton Pattern
  static getInstance() {
    if(ITDepartment.instance){
      return this.instance;
    }
    this.instance = new ITDepartment(10, []);
    return this.instance;
  }

  // Override
  setEmployee(nm: string) {
    if(nm === 'Soham'){
      return;
    }
    this.employees.push(nm);
  }

  setAdmins(admin: string){
    this.admins.push(admin);
    this.lastAdmin = admin;
  }

  getAdmins(){
    console.log(`Admins are ${this.admins}`)
  }

}
// Version - 1 direct
// const dept = new ITDepartment(10, ['Ivy', 'Candy']);

// Version - 2 indirect
// const dept = new ITDepartment(10, []);

// Singleton WAY
const dept = ITDepartment.getInstance();

// dept.setAdmins('Ivy');
// dept.setAdmins('ChocoCandy');

dept.getAdmins();

console.log(dept);

dept.department();

// using Override
dept.setEmployee('Soham');
dept.setEmployee('Candy');

dept.getEmployee();

// Getter - Setter (JUST CLOSING dept.setAdmins())
// console.log(dept.getLastAdmin); // Throws error as no report is set
dept.setAdmins('Ivy');
dept.setLastAdmin = 'Soham';
console.log("VAL from getter setter " + dept.getLastAdmin);

// calling static method
console.log(Department.employee('Soham Roy'));

// CALLING abstract method
dept.departmentDetails('Development Team');


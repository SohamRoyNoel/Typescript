// type Student = {
//   name: string;
//   marks: number;
// }

// type Employee = {
//   name: string;
//   salary: number;
// }

// type intersactionType = Student & Employee;

// const human: intersactionType = {
//   name: 'Soham',
//   marks: 40,
//   salary: 100
// }

// // Type guard :: object type
// type people = Student | Employee;

// function printEmployeeInfo(emp: people) {
//   console.log("name: " + emp.name);
//   // if(typeof emp === 'Student') typeof is only available for TS types
//   if('salary' in emp) {
//     console.log("salary: " + emp.salary);
//   } else {
//     console.log("marks: " + emp.marks);
//   }
  
// }

// printEmployeeInfo({name: 'Soham', salary: 1000})


// // Type guard :: class
// class Car {
//   drive(){
//     console.log("Driving a car");
//   }
// }

// class Truck {
//   drive(){
//     console.log("Driving a Truck");
//   }

//   load(amt: number){
//     console.log("Driving a Truck with load of " + amt);
//   }
// }

// type vehicle = Car | Truck;

// function driver(vehicle: vehicle){
//   vehicle.drive();
//   if(vehicle instanceof Truck){
//     vehicle.load(1000);
//   }
// }

// const c = new Car();
// const t = new Truck();

// driver(t);
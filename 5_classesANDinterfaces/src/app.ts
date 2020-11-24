// interface 
interface Person {
  name: string;
  age: number;

  getDetails(name: string): void;
}

let user1 : Person;

user1 = {
  name: 'Soham',
  age: 23,

  getDetails(name: string){
    console.log(`${name} and his age: ${this.age}`);
  }
};

user1.getDetails('Ivy');

// Class implementation of Interface
interface Studentable {
  name?: string;

  getDetails(name: string): void;
}

class Student implements Studentable {
  
  name?: string; // Optional Parameter------------------------------------------------
  age: number = 30;

  constructor(n?: string){
    if(n){
      this.name = n
    }    
  }

  getDetails(name: string): void {
    console.log(`my name is : ${name} getting from Interface name ${this.name}`)
  }
  
}

let student = new Student('John');

student.getDetails('Tom');

console.log(student);

// function implementation of Interface
// type AddFunction = (a: number, b: number) => number; // TYPE implementation
// INTERFACE Implementation
interface AddFunction {
  (a: number, b: number) : number;
}

let add: AddFunction;
add = (n1: number, n2: number) => {
  return n1 + n2;
}

console.log("Adder : " + add(10, 20));
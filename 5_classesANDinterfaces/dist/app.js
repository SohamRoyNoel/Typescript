"use strict";
let user1;
user1 = {
    name: 'Soham',
    age: 23,
    getDetails(name) {
        console.log(`${name} and his age: ${this.age}`);
    }
};
user1.getDetails('Ivy');
class Student {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    getDetails(name) {
        console.log(`my name is : ${name} getting from Interface name ${this.name}`);
    }
}
let student = new Student('John');
student.getDetails('Tom');
console.log(student);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log("Adder : " + add(10, 20));

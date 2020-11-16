
// In TS we dont need to specify return type explicitly, TS inference does it for us
function add(n1: number, n2:number) : number{
      return n1+n2;
}

// Void and Undefined type :: void means no return type
function printer(num:number) : void{
      console.log(num);
}

function printer1(num:number) : undefined{
      console.log(num);
      return;
}

// Pointing a function to variable
let addVals = add
console.log(addVals(8,8));

// creating Error: TS inference does the auto Function as type trick
let addVals1 = add;
// addVals = 5; // Exception: Type 'number' is not assignable to type '(n1: number, n2: number) => number'
//console.log(addVals1(8));

let variablesUser : (a:number, b:number) => number; // Function as type
variablesUser = add
variablesUser = printer // error

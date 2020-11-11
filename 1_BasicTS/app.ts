function add(n1: number, n2: number){
      return n1+n2;
}

// Type Inference: In TypeScript, there are several places where type inference
// is used to provide type information when there is no explicit type annotation

// direct assignment makes variable to that specified type
let n1 = 10;
const n2 = 10.3;

// Explicit type and
// assigning wrong type
let x : string;
x = 0; // Type ERROR

const addval = add(n1, n2);
console.log(addval)
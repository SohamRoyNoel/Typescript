function add(n1, n2) {
    return n1 + n2;
}
// Type Inference: In TypeScript, there are several places where type inference
// is used to provide type information when there is no explicit type annotation
// direct assignment makes variable to that specified type
var n1 = 10;
var n2 = 10.3;
// Explicit type and
// assigning wrong type
var x;
x = 0; // Type ERROR
var addval = add(n1, n2);
console.log(addval);

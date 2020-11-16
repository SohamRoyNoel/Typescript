// In TS we dont need to specify return type explicitly, TS inference does it for us
function add(n1, n2) {
    return n1 + n2;
}
// Void and Undefined type :: void means no return type
function printer(num) {
    console.log(num);
}
function printer1(num) {
    console.log(num);
    return;
}
var addVals = add;
console.log(addVals(8, 8));
